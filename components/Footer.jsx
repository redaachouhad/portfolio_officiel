function Footer() {
  const year = new Date().getFullYear();
  return (
    <div
      id="footer"
      className="w-full bg-[rgb(75,55,207)] text-white text-center py-2 sm:py-4"
    >
      <span>&copy; Reda Achouhad &ndash; {year}</span>
    </div>
  );
}

export default Footer;
