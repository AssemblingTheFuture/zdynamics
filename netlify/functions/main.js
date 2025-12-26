exports.handler = async function(event, context) {
    const UDEMY_TOKEN = process.env.UDEMY_TOKEN;

    // CHEQUEO 1: ¿Existe el token?
    if (!UDEMY_TOKEN) {
        return {
            statusCode: 500,
            body: JSON.stringify({ 
                error: "Falta Token", 
                mensaje: "La variable de entorno UDEMY_TOKEN no está configurada o está vacía." 
            })
        };
    }

    try {
        console.log("Iniciando conexión con Udemy...");

        const response = await fetch("https://www.udemy.com/instructor-api/v1/taught-courses/courses/?fields[course]=num_students", {
            headers: {
                "Authorization": `Bearer ${UDEMY_TOKEN}`,
                "Content-Type": "application/json"
            }
        });

        // CHEQUEO 2: ¿Udemy nos rechazó?
        if (!response.ok) {
            return {
                statusCode: response.status,
                body: JSON.stringify({ 
                    error: "Udemy rechazó la conexión", 
                    status: response.status,
                    statusText: response.statusText 
                })
            };
        }

        const data = await response.json();

        // CHEQUEO 3: ¿Llegaron los datos correctamente?
        if (!data.results) {
            return {
                statusCode: 500,
                body: JSON.stringify({ 
                    error: "Formato inesperado", 
                    respuesta_completa: data // Esto nos mostrará qué envió Udemy
                })
            };
        }

        // Si todo sale bien, sumamos
        let totalStudents = 0;
        data.results.forEach(course => {
            totalStudents += course.num_students;
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ 
                total_students: totalStudents,
                mensaje: "Éxito" 
            })
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ 
                error: "Error interno en la función", 
                detalle: error.message 
            })
        };
    }
};