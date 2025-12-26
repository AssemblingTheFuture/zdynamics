exports.handler = async function(event, context) {
    const UDEMY_TOKEN = process.env.UDEMY_TOKEN;

    // CAMBIO: Quitamos el filtro "fields" para que Udemy nos mande TODO lo que tenga del curso.
    const url = "https://www.udemy.com/instructor-api/v1/taught-courses/courses/?page_size=10";

    try {
        const response = await fetch(url, {
            headers: {
                "Authorization": `Bearer ${UDEMY_TOKEN}`,
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        // SI ENCUENTRA CURSOS, DEVUELVE EL PRIMERO COMPLETO PARA INSPECCIONAR
        if (data.results && data.results.length > 0) {
            return {
                statusCode: 200,
                body: JSON.stringify({ 
                    mensaje: "DIAGNÓSTICO: Estructura del primer curso",
                    // Esto nos mostrará todas las variables disponibles (id, title, num_students??, subscribers??)
                    primer_curso_crudo: data.results[0] 
                })
            };
        } else {
            return {
                statusCode: 200,
                body: JSON.stringify({ mensaje: "No se encontraron cursos en la lista." })
            };
        }

    } catch (error) {
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};