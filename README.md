# pacto-agente-releases
Canal oficial de instaladores y actualizaciones de Pacto. Solo binarios, sin codigo privado.

## Instalar Pacto en otro PC

**[Abrir la guía con capturas dentro de Pacto](https://app.lxmcreators.com/ajustes/instalar)** · [Guía móvil](https://m.lxmcreators.com/ajustes/instalar)

La guía tiene una opción manual y un encargo para copiar a Codex o Claude. El agente de ayuda debe consultar la guía y el manifiesto vigentes antes de instalar: no debe usar una copia antigua del repositorio o de estas instrucciones.

1. En el PC que vas a conectar, [descarga el paquete vigente de Windows](https://github.com/gabriellxmcreators/pacto-agente-releases/releases/latest/download/Pacto-Windows.zip).
2. Extrae **todo** el ZIP. Ejecuta **Instalar.cmd** dentro de esa carpeta; no ejecutes desde el ZIP sin extraer.
3. Acepta el permiso de Windows con la misma cuenta que utilizará Pacto. Completa la conexión en el navegador con tu cuenta de Pacto.
4. Abre Ajustes → Conexiones y comprueba que ese equipo esté conectado. Sigue las comprobaciones y capturas de la guía si aparece un error.

El instalador verifica el paquete y reemplaza las versiones oficiales obsoletas conservando credenciales y datos locales de continuidad. Si falla una comprobación, muestra el error. No hay que borrar a mano todas las carpetas ni desactivar la seguridad de Windows.

## Qué se actualiza automáticamente

- **Agente de Windows (Companion + bloqueo):** una vez instalado y ejecutándose, consulta este canal al iniciar y cada cinco horas. Requiere Internet, descarga la versión nueva y verifica SHA-256 antes de aplicarla. No es una actualización instantánea de todos los equipos.
- **Recursos de la guía:** enlaces estables a la última publicación; el indicador de versión publicada se consulta al abrir, volver a la pestaña, recuperar Internet y cada cinco minutos con la página visible. No mide la versión instalada en tu PC.
- **Chrome cargado manualmente:** requiere actualización manual. La actualización por Chrome Web Store sigue pendiente.

Las capturas son referencias del recorrido, no una retransmisión en vivo. La versión numérica de una captura puede ser anterior al indicador vigente.

## Enlaces oficiales estables

- [Última publicación y notas](https://github.com/gabriellxmcreators/pacto-agente-releases/releases/latest)
- [Paquete Windows](https://github.com/gabriellxmcreators/pacto-agente-releases/releases/latest/download/Pacto-Windows.zip)
- [Extensión Chrome](https://github.com/gabriellxmcreators/pacto-agente-releases/releases/latest/download/Pacto-Chrome.zip)
- [Manifiesto de versión y hash](https://github.com/gabriellxmcreators/pacto-agente-releases/releases/latest/download/version.json)

La firma Authenticode y la instalación mediante otra cuenta administradora aún están pendientes. No se garantiza la instalación en un equipo nuevo hasta verificarla allí.
