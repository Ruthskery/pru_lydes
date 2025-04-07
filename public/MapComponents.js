"use client"; // Needed for Next.js app router

const MapComponent = () => {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.3191277626106!2d121.06190446961953!3d14.583313497016775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c975d73a341d%3A0xd324adefb69b0622!2sExquadra%20Tower!5e0!3m2!1sen!2sph!4v1742955978593!5m2!1sen!2sph" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
