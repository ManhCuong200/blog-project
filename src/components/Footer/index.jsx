import React from "react";
import Logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/5 py-10 md:py-16 flex flex-col md:flex-row items-center justify-between">
      <div>
        <img className="logo max-w-12 cursor-pointer" src={Logo} alt="logo" />
        <div className="max-w-[410px] mt-6 text-card-foreground text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde
          quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
        </div>
      </div>
      <div className="flex flex-wrap justify-between w-full md:w-auto mt-10 md:mt-0">
        <div className="flex justify-between w-full min-w-[100%] md:min-w-[450px] gap-5 flex-col md:flex-row">
          <div>
            <h3 class="font-semibold text-base mb-2">Quick Links</h3>
            <ul>
              <li>
                <a
                  class="text-foreground text-xs hover:text-primary"
                  href="/"
                  data-discover="true"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  class="text-foreground text-xs hover:text-primary"
                  href="/"
                  data-discover="true"
                >
                  Best Sellers
                </a>
              </li>
              <li>
                <a
                  class="text-foreground text-xs hover:text-primary"
                  href="/"
                  data-discover="true"
                >
                  Offers & Deals
                </a>
              </li>
              <li>
                <a
                  class="text-foreground text-xs hover:text-primary"
                  href="/"
                  data-discover="true"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  class="text-foreground text-xs hover:text-primary"
                  href="/"
                  data-discover="true"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-base mb-2">Need Help?</h3>
            <ul>
              <li>
                <a
                  class="text-foreground text-xs hover:text-primary"
                  href="/"
                  data-discover="true"
                >
                  Delivery Information
                </a>
              </li>
              <li>
                <a
                  class="text-foreground text-xs hover:text-primary"
                  href="/"
                  data-discover="true"
                >
                  Return &amp; Refund Policy
                </a>
              </li>
              <li>
                <a
                  class="text-foreground text-xs hover:text-primary"
                  href="/"
                  data-discover="true"
                >
                  Payment Methods
                </a>
              </li>
              <li>
                <a
                  class="text-foreground text-xs hover:text-primary"
                  href="/"
                  data-discover="true"
                >
                  Track your Order
                </a>
              </li>
              <li>
                <a
                  class="text-foreground text-xs hover:text-primary"
                  href="/"
                  data-discover="true"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold text-base mb-2">Follow Us</h3>
            <ul>
              <li>
                <a
                  class="text-foreground text-xs hover:text-primary"
                  href="/"
                  data-discover="true"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  class="text-foreground text-xs hover:text-primary"
                  href="/"
                  data-discover="true"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  class="text-foreground text-xs hover:text-primary"
                  href="/"
                  data-discover="true"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  class="text-foreground text-xs hover:text-primary"
                  href="/"
                  data-discover="true"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
