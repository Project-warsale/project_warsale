/* eslint-disable @next/next/no-img-element */
import React from "react";
import { service, Producten } from "../../data/index";
import Image from "next/image";

// Define the type for each menu item
interface MenuItem {
  href: string;
  label: string;
}

const Footer: React.FC = () => {
  return (
    <footer className="page-footer">
      <div className="footer-content">
        <div className="container">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Services Section */}
            <FooterColumn title="Service" items={service} />

            {/* Products Section */}
            <FooterColumn title="Products" items={Producten} />

            {/* Contact Information */}
            <div className="footer-col">
              <h2 className="cmsb96-pb-1">Allprepare</h2>
              <div className="footer-col-content">
                <span>Avenue Corpus Den Hoorn 108</span>
                <br />
                <span>9728 JR Groningen</span>
              </div>
              <span className="text-22px text-white-800 cmsb96-mb-4 cmsb96-font-bold">
                +31 85 016 3024
              </span>
            </div>

            {/* Newsletter Section */}
            <div className="footer-col">
              <div className="newsletter w-full">
                <form
                  className="form subscribe"
                  action="https://www.allprepare.com/newsletter/subscriber/new/"
                  method="post">
                  <div className="font-bold">Sign up for our newsletter</div>
                  <div className="mb-4">Get the best deals</div>
                  <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                    <label htmlFor="newsletter-subscribe" className="sr-only">
                      Email address
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      id="newsletter-subscribe"
                      className="form-input inline-flex w-full"
                      placeholder="Email address"
                    />
                    <button className="inline-flex justify-center w-full btn btn-primary">
                      To enroll
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <FooterBottom />
    </footer>
  );
};

const FooterColumn: React.FC<{ title: string; items: MenuItem[] }> = ({
  title,
  items,
}) => (
  <div className="footer-col">
    <h2 className="cmsb94-pb-1">{title}</h2>
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.href}>{item.label}</a>
        </li>
      ))}
    </ul>
  </div>
);

const FooterBottom = () => (
  <div className="footer-bottom">
    <div className="container text-center">
      <div className="payment-logo py-4 flex flex-wrap items-center justify-center space-x-6 lg:space-x-8">
        {/* Using Next.js Image component to load the local images */}
        <Image
          className="cmsb99-my-2"
          src={"/ideal-logo.svg"}
          alt="iDEAL"
          width={25}
          height={22}
        />
        <Image
          className="cmsb99-my-2"
          src={"/mastercard-logo.svg"}
          alt="MasterCard"
          width={33}
          height={26}
        />
        <Image
          className="cmsb99-my-2"
          src={"/visa-logo.svg"}
          alt="Visa"
          width={55}
          height={18}
        />
        <Image
          className="cmsb99-my-2"
          src={"/sofort-logo.svg"}
          alt="Immediately"
          width={37}
          height={24}
        />
        <Image
          className="cmsb99-my-2"
          src={"paypal-logo.svg"}
          alt="Paypal"
          width={90}
          height={22}
        />
        <Image
          className="cmsb99-my-2"
          src={"/apple_pay-logo.svg"}
          alt="Apple Pay"
          width={54}
          height={22}
        />
      </div>
      <div className="text-sm w-full pb-6">
        Customer rating <strong>9/10 - 1,946</strong> reviews
      </div>
      <div className="text-sm w-full pt-2 mb-4">
        © 2014 - 2024 Allprepare. All prices are inclusive of VAT.
      </div>
    </div>
  </div>
);

export default Footer;
