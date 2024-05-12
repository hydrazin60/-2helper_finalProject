import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
export default function FooterCom() {
  return (
    <Footer container className=" bg-zinc-900 border border-t-8 border-teal-500">
      <div className="   w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link to="/">
              <img
                src="logo.png"
                className="h-14 rounded-full  cursor-pointer "
                alt="logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title className="text-white" title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.afu.edu.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <hr className="rext-white border-b-2" />
                  AFU Chitwan
                </Footer.Link>
                <Footer.Link
                  href="https://en.wikipedia.org/wiki/Kalikot_District"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Kalikot
                </Footer.Link>
                <Footer.Link  className="text-white" href="#" target="_blank" rel="noopener noreferrer">
                  MAILA aaru thap
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title  className="text-white" title="Follow us" />
              <hr />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://twitter.com/PriyaKarna17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  twitter
                </Footer.Link>
                <Footer.Link
                  href="https://www.facebook.com/nawaraj.pandey.2057"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  Facebook
                </Footer.Link>
                <Footer.Link
                  href="https://www.linkedin.com/in/nawarajpandey61/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  linkedin
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title  className="text-white" title="Legal" />
              <hr />
              <Footer.LinkGroup col>
                <Footer.Link  className="text-white" href="#">Privacy Policy</Footer.Link>
                <Footer.Link  className="text-white" href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            className="text-white"
            by="JBN_pandey"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/nawaraj.pandey.2057"
              target="main"
              icon={BsFacebook}
              className="text-white"
            />
            <Footer.Icon
              href="https://www.threads.net/@priyakarna56"
              target="main"
              icon={BsInstagram}
              className="text-white"
            />
            <Footer.Icon
              href="https://twitter.com/i/flow/login?redirect_after_login=%2FPriyaKarna17"
              target="main"
              icon={FaTwitter}
              className="text-white"
            />
            <Footer.Icon
              href="https://github.com/hydrazin60"
              target="main"
              icon={BsGithub}
              className="text-white"
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/nawarajpandey61/"
              target="main"
              icon={FaLinkedin}
              className="text-white"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
