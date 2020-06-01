const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Actualiza el estado de la tarea'
}

const optcrear = {
    descripcion
}

const optborrar = {
    descripcion
}

const optactualizar = {
    completado,
    descripcion
}

const argv = require('yargs')
    .command('crear', 'Crea una actividad', optcrear)
    .command('actualizar', 'Actualiza todas las actividades', optactualizar)
    .command('borrar', 'borra una actividad', optborrar)
    .help()
    .argv;

module.exports = {
    argv
}