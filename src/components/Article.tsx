import MobileIllustration from "../assets/images/image-web-3-mobile.jpg";
import DesktopIllustration from "../assets/images/image-web-3-desktop.jpg";

export default function Article() {
  return (
    <section>
      <picture>
        <source srcSet={MobileIllustration} media="(max-width: 768px)" />
        <source srcSet={DesktopIllustration} media="(min-width: 768px)" />
        <img src={DesktopIllustration} alt="" />
      </picture>
      <h1> The Bright Future of Web 3.0?</h1>
      <div>
        <p>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button type="button"> Read more</button>
      </div>
    </section>
  );
}
