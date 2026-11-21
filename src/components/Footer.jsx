export default function Footer() {
  return (
    <footer className="footer" id="story">
      <div className="footer-top">
        <div>
          <a className="logo footer-logo" href="#">
            lumi<span>.</span>
          </a>

          <p>
            Good things, thoughtfully chosen.
            <br />
            Made for the way you live.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <a href="#shop">Shop all</a>
            <a href="#story">Our story</a>
            <a href="#journal">Journal</a>
          </div>

          <div>
            <h4>Need a hand?</h4>
            <a href="#footer">Contact</a>
            <a href="#footer">Shipping & returns</a>
            <a href="#footer">FAQs</a>
          </div>

          <div>
            <h4>Follow along</h4>
            <a href="#footer">
              Instagram ↗
            </a>

            <a href="#footer">
              Pinterest ↗
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 LUMI STUDIO</span>
        <span>MADE WITH INTENTION</span>
        <span>PRIVACY · TERMS</span>
      </div>
    </footer>
  );
}