const SerialPort = require('@palettegear/serialport-stream')
const Binding = require('@palettegear/serialport-bindings')
const parsers = require('./parsers')

/**
 * @type {AbstractBinding}
 */
SerialPort.Binding = Binding

/**
 * @type {Parsers}
 */
SerialPort.parsers = parsers

module.exports = SerialPort
