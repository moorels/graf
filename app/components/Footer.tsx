import React from "react";
import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";

type ColumnProps = {
    title: string;  
    links: Array<string>;
}


const FooterColumn = ({title, links}: ColumnProps) => (

    <div className="footer_column">
        <h4 className="font-bold">{title}</h4>
        <ul className="flex flex-col gap-2 font-normal">
{links.map((link) => 
<Link href="/" key={link}>{link}</Link>

)
}
        </ul>
     </div>
)


const Footer = () => {
  return (
    <footer className="flex-start footer">
      <div className="flex flex-col gap-12 w-full border border-spacing-5 p-6 bg-gray-[25px]">
        <div className="flex items-start flex-col ">
          <Image src="logo-purple.svg" width={115} height={43} alt="logo" />
          <p className="text-start text-smmt-5 max-w-xs p-3">
            Flexable is the best shit tin the world
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
            <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links}/>
            <div className="flex-1 flex flex-col gap-4">
            <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links}/>
            <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links}/>
</div>
<FooterColumn title={footerLinks[3].title} links={footerLinks[3].links}/>
<div className="flex-1 flex flex-col gap-4">
            <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links}/>
            <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links}/>
</div>
<FooterColumn title={footerLinks[6].title} links={footerLinks[6].links}/>
        </div>
      </div>
      <div className="flex-between flex items-center p-4 ">
        <p>@ 2023 Flexable All right reserved</p>
        </div>
        <div className=" flex justify-end px-8 items-center gap-4">
        <div className="text-gray">
            <span className="text-black font-bold ">
                10,122
            </span> Projects Submitted
        </div></div>
      
    </footer>
  );
};

export default Footer;
