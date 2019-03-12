const SerialPort = require('@palettegear/serialport-stream')
const Binding = require('@palettegear/serialport-binding-mock')
const parsers = require('./lib/parsers')

SerialPort.Binding = Binding
SerialPort.parsers = parsers

module.exports = SerialPort
