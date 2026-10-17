#!/usr/bin/env node
// Candado de trabajo LXM (hook UserPromptSubmit de Claude Code). Sin dependencias.
// Lunes a viernes 9:00-17:00 America/Bogota, desde el 2026-10-19: bloquea el prompt de Gabriel.
// Rutinas y agentes pasan (regex en los primeros 400 caracteres o LXM_AGENTE=1).
// Solo se desactiva con una orden escrita de Gabriel. CANDADO_AHORA (ISO) solo para pruebas.
process.on('uncaughtException', () => process.exit(0));
const INICIO = '2026-10-19';
const AGENTE = /rutina|auditor semanal|revisor semanal|seguimiento del caso de soporte|autoarreglo|\[para:|subagente|RUTINA-LXM/i;

function leerStdin() {
  return new Promise((ok) => {
    let d = '';
    if (process.stdin.isTTY) return ok('');
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (c) => (d += c));
    process.stdin.on('end', () => ok(d));
    process.stdin.on('error', () => ok(d));
  });
}

function bogota(fecha) {
  const p = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Bogota', year: 'numeric', month: '2-digit', day: '2-digit',
      hour: '2-digit', minute: '2-digit', weekday: 'short', hourCycle: 'h23',
    }).formatToParts(fecha).map((x) => [x.type, x.value]),
  );
  return { dia: `${p.year}-${p.month}-${p.day}`, semana: p.weekday, h: Number(p.hour), m: Number(p.minute) };
}

async function main() {
  const crudo = await leerStdin();
  if (process.env.LXM_AGENTE === '1') return;
  let prompt = '';
  try { prompt = String(JSON.parse(crudo || '{}').prompt || ''); } catch { prompt = ''; }
  if (AGENTE.test(prompt.slice(0, 400))) return;
  const ahora = process.env.CANDADO_AHORA ? new Date(process.env.CANDADO_AHORA) : new Date();
  if (Number.isNaN(ahora.getTime())) return;
  const t = bogota(ahora);
  if (t.dia < INICIO) return;
  if (t.semana === 'Sat' || t.semana === 'Sun') return;
  const min = t.h * 60 + t.m;
  if (min < 9 * 60 || min >= 17 * 60) return;
  const hhmm = `${String(t.h).padStart(2, '0')}:${String(t.m).padStart(2, '0')}`;
  const reason = `Gabriel, deja de construir. Son las ${hhmm}: vende. 1) Llama → Pacto app.lxmcreators.com 2) Sigue a los que respondieron → GHL conversaciones 3) Publica 1 pieza → Metricool. Vuelve después de las 17:00.`;
  process.stdout.write(JSON.stringify({ decision: 'block', reason }));
}

main().then(() => process.exit(0), () => process.exit(0));
