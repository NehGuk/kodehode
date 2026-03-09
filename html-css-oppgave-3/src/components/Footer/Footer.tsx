import "./Footer.css"

function Footer() {
  return (
    <footer className="footer" id="6">
      <h3>HTML & CSS | Oppgave 3</h3>
      <p>By Henri</p>
      <h3>Newsletter</h3>
      <form>
        <label htmlFor="email">Subscribe</label>
        <input type="email" id="email" placeholder="name@email.com" />
      </form>
    </footer>
  )
}
export default Footer
