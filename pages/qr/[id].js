import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

/**
 * Página dinámica para mostrar y descargar el QR de un campista.
 *
 * Esta página busca un parámetro dinámico `id` en la ruta (`/qr/[id]`)
 * o un parámetro de consulta `id` cuando se accede a `/qr?id=CAMP-001`.
 * Luego carga la imagen desde el directorio `public/qrs` con el
 * nombre correspondiente y ofrece la opción de descargarla.
 */
export default function QRPage() {
  const router = useRouter();
  const { id: routeId } = router.query;
  // También soportamos ?id=... si el usuario viene de /qr?id=CAMP-001
  const queryId = router.query.id;
  const id = routeId || queryId;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Resetear estado cuando cambia el id
    setLoaded(false);
  }, [id]);

  if (!id) {
    return (
      <p style={{fontFamily:'Arial, sans-serif',marginTop:'2rem',textAlign:'center'}}>
        Cargando...
      </p>
    );
  }

  const filePath = `/qrs/${id}.png`;

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',padding:'2rem',fontFamily:'Arial, sans-serif'}}>
      <h1 style={{fontSize:'1.5rem'}}>Tu QR de acceso</h1>
      <p style={{marginBottom:'1rem'}}>Campista: {id}</p>
      {/* Mostrar la imagen */}
      <img
        src={filePath}
        alt={`QR ${id}`}
        style={{maxWidth:'320px',border:'1px solid #ccc',padding:'8px',background:'#fff'}}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(false)}
      />
      {/* Mostrar enlace de descarga una vez cargada la imagen */}
      {loaded ? (
        <a
          href={filePath}
          download={`${id}.png`}
          style={{marginTop:'1rem',padding:'0.5rem 1rem',background:'#0070f3',color:'#fff',textDecoration:'none',borderRadius:'4px'}}
        >
          Descargar QR
        </a>
      ) : (
        <p style={{marginTop:'1rem'}}>Cargando QR...</p>
      )}
    </div>
  );
}