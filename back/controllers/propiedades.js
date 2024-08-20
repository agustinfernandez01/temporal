const { conection } = require ( "../config/DB" );

// FUNCIONES QUERY

//FUNCIONES QUERY PARA LA PAGINA CLIENTE (SOLO SE MUESTRA) TUCUMAN
const allProp = (req, res) => {
  const query = "SELECT id, titulo, descripcion, imagenes FROM propiedades WHERE provincia = 'Tucuman';";

  conection.query(query, (error, results) => {
    if (error) {
      console.error("Error en la consulta:", error);
      res.status(500).json({ message: "Error en la consulta" });
      return;
    }

    const formattedResults = results.map(propiedad => {
      if (propiedad.imagenes) {
        try {
          const imagesArray = JSON.parse(propiedad.imagenes);
          propiedad.imagenes = imagesArray.map(img => ({
            type: img.type,
            data: img.data,
          }));
        } catch (parseError) {
          console.error("Error al parsear JSON:", parseError);
          propiedad.imagenes = [];
        }
      } else {
        propiedad.imagenes = [];
      }
      return propiedad;
    });

    res.json(formattedResults);
  });
};

const singleProp = (req, res) => {
  const query = "SELECT * FROM propiedades WHERE provincia = 'Tucuman' AND id = ?";
  const { id } = req.params;

  conection.query(query, [id], (error, results) => {
    if (error) {
      console.error("Error en la consulta: " + error);
      return res.status(500).json({ message: 'Error en el servidor' });
    }

    if (results.length > 0) {
      const propiedad = results[0];

      // Convertimos el campo de imágenes a un array de objetos con base64
      if (propiedad.imagenes) {
        try {
          propiedad.imagenes = JSON.parse(propiedad.imagenes).map(imagen => ({
            data: imagen.data, // Los datos base64 de la imagen
            type: imagen.type  // El tipo MIME de la imagen
          }));
        } catch (err) {
          propiedad.imagenes = [];
          console.error("Error al parsear JSON de imágenes: " + err);
        }
      } else {
        propiedad.imagenes = [];
      }

      res.json(propiedad);
    } else {
      res.status(404).json({ message: 'Propiedad no encontrada' });
    }
  });
};

//FIN FUNCIONES QUERY PARA LA PAGINA CLIENTE (SOLO SE MUESTRA)

module.exports = { singleProp , allProp };
