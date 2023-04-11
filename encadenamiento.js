/* Proceso de inscripcion a Kodemia con promesas
 * Encadenamiento
 */ 
const koderDamaris = {
    name: "Damaris",
    interviewed: false,
    proposalSent: false,
    isEnrolled: false,
    introductoryCourse: false
}



function takeAInterview(koderToInterview) {
    return new Promise((resolve, reject) => {
        console.log(`Entrevistando a ${koderToInterview.name}`)

        setTimeout(() => {
            koderToInterview.interviewed = true
            if (!koderToInterview.interviewed) {
                reject(`Error en la entrevista con ${koderToInterview.name}`)
            }
            resolve(koderToInterview)
        }, 2000)
    })
}

function sendAProposal(koderToOffer) {
    return new Promise((resolve, reject) => {
        console.log(`Revisando entrevista..  Trabajando en una propuesta para ${koderToOffer.name}`)

        setTimeout(() => {
            koderToOffer.proposalSent = true
            if (!koderToOffer.proposalSent) {
                reject(`No se pudo generar la propuesta para ${koderToOffer.name}`)
            }
            resolve(koderToOffer)
        }, 2000)
    })
}

function enrollment(koderToEnroll) {
    return new Promise((resolve, reject) => {
        console.log(`Trabajando en la inscripcion de ${koderToEnroll.name}`)

        setTimeout(() => {
            koderToEnroll.isEnrolled = true
            if (!koderToEnroll.isEnrolled) {
                reject(`Error en la inscripcion de ${koderToEnroll.name}`)
            }
            resolve(koderToEnroll)
        }, 2000)
    })
}



function startCourse(koderCourse) {
    return new Promise((resolve, reject) => {
        console.log(`Pronto ${koderCourse.name} iniciara su curso introductorio`)
        setTimeout(() => {
            koderCourse.introductoryCourse = true
            if(!koderCourse.introductoryCourse) {
                reject(`Ha habido un error. ${koderCourse.name} todavia no puede tomar el curso introductorio`)
            } 
            resolve(koderCourse)
        }, 2000)
    })
    }
    

takeAInterview(koderDamaris)
    .then((interviewedKoder) => {
        console.log(`${interviewedKoder.name} ha sido entrevistado`)
        console.log(interviewedKoder)
        return sendAProposal(interviewedKoder)
    })
    .then((koderWithProposal) => {
        console.log(`La oferta se genero exitosamente para ${koderWithProposal.name}`)
        console.log(koderWithProposal)
        return enrollment(koderWithProposal)
    })
    .then((koderEnrollment) => {
        console.log(`La inscripcion de ${koderEnrollment.name} se genero exitosamente`)
        console.log(koderEnrollment)
        return startCourse(koderEnrollment)
    })
    .then((koderIntroductoryCourse) => {
        console.log(`El curso introductorio ha iniciado exitosamente. ${koderIntroductoryCourse.name} ya lo esta tomando.`)
        console.log(koderIntroductoryCourse)
    })
    .catch((error) => {
        console.log("Ocurrio un problema: ", error)
    })
