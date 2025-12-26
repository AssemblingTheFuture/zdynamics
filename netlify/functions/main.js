exports.handler = async function(event, context) {
    // 1. Obtenemos el token seguro desde Netlify
    const UDEMY_TOKEN = process.env.UDEMY_TOKEN;

    if (!UDEMY_TOKEN) {
        return { statusCode: 500, body: "Error: Falta configuración del Token." };
    }

    try {
        // 2. Llamamos a Udemy pidiendo hasta 100 cursos para asegurar que traemos todos
        // Pedimos solo el campo 'num_students' para que sea rápido
        const response = await fetch("https://www.udemy.com/instructor-api/v1/taught-courses/courses/?page_size=100&fields[course]=num_students", {
            headers: {
                "Authorization": `Bearer ${UDEMY_TOKEN}`,
                "Content-Type": "application/json"
            }
        });

        if (!response.ok) {
            throw new Error(`Error de Udemy: ${response.statusText}`);
        }

        const data = await response.json();

        // 3. Sumamos los estudiantes de todos los cursos
        let totalStudents = 0;
        if (data.results && Array.isArray(data.results)) {
            data.results.forEach(course => {
                totalStudents += course.num_students;
            });
        }

        // 4. Devolvemos el dato limpio a tu sitio web
        return {
            statusCode: 200,
            body: JSON.stringify({ total_students: totalStudents })
        };

    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "No se pudieron obtener las métricas" })
        };
    }
};