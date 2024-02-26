import RetroPCIllustration from "../assets/images/image-retro-pcs.jpg";
import KeybordIllustration from "../assets/images/image-top-laptops.jpg";
import ConsoleIllustration from "../assets/images/image-gaming-growth.jpg";
export default function LisstArticle() {
  return (
    <section>
      <article>
        <img src={RetroPCIllustration} alt="" />
        <div>
          <span>01</span>
          <h4> Reviving Retro PCs</h4>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </article>

      <article>
        <img src={KeybordIllustration} alt="" />
        <div>
          <span>02</span>
          <h4>Top 10 Laptops of 2022</h4>
          <p> Our best picks for various needs and budgets.</p>
        </div>
      </article>

      <article>
        <img src={ConsoleIllustration} alt="" />
        <div>
          <span>03</span>
          <h4>The Growth of Gaming</h4>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </article>
    </section>
  );
}
