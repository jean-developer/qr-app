import Link from 'next/link';

export default function Home() {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'4rem',fontFamily:'Arial, sans-serif'}}>
      <h1 style={{fontSize:'2rem'}}>Bienvenido al descargador de QR</h1>
      <p style={{maxWidth:'600px',textAlign:'center',marginTop:'1rem'}}>
        Este pequeño sitio sirve las imágenes QR para los campistas.  
        Para obtener el QR de un campista específico, dirígete a
        <code style={{background:'#f3f3f3',padding:'2px 4px',borderRadius:'4px',marginLeft:'4px'}}> /qr/&lt;ID&gt;</code>
        , reemplazando <code>&lt;ID&gt;</code> por el número de campista (por ejemplo,
        <code>CAMP-001</code>). También puedes pasar el ID como parámetro de consulta
        utilizando <code>?id=CAMP-001</code> en la ruta <code>/qr</code>.
      </p>
      <p style={{marginTop:'1rem'}}>Ejemplo: <Link href="/qr/CAMP-001"><a>CAMP-001</a></Link></p>
    </div>
  );
}