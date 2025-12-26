exports.handler = async function(event, context) {
    const UDEMY_TOKEN = process.env.UDEMY_TOKEN;

    // Aquí usamos un endpoint diferente: La lista de cursos públicos.
    // Esto suele ser más fiable para contar alumnos totales.
    const url = "https://www.udemy.com/instructor-api/v1/taught-courses/courses/?fields[course]=num_students,title";

    try {
        const response = await fetch(url, {
            headers: {
                "Authorization": `Bearer ${UDEMY_TOKEN}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            return {
                statusCode: response.status,
                body: JSON.stringify({ error: "Udemy Error", status: response.status })
            };
        }

        const data = await response.json();

        // DEPURACIÓN: Vamos a ver qué cursos está encontrando
        console.log("Cursos encontrados:", data.count);
        
        // Si data.results es null o vacío, devolvemos el error específico
        if (!data.results || data.results.length === 0) {
            return {
                statusCode: 200, // Respondemos 200 pero con aviso
                body: JSON.stringify({ 
                    total_students: 4800, // Fallback manual seguro
                    mensaje: "La API respondió OK pero la lista de cursos venía vacía. Usando respaldo.",
                    debug_data: data // Para que veas qué respondió realmente
                })
            };
        }

        let totalStudents = 0;
        let cursosNombres = []; // Para ver qué cursos detectó

        data.results.forEach(course => {
            totalStudents += course.num_students;
            cursosNombres.push(course.title);
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ 
                total_students: totalStudents,
                cursos_detectados: cursosNombres, // Esto nos dirá si está viendo tus cursos correctos
                mensaje: "Éxito Real"
            })
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        };
    }
};