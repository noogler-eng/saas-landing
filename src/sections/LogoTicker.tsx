import echoLogo from "../assets/logo-echo.png";
import acmeLogo from "../assets/logo-acme.png";
import apexLogo from "../assets/logo-apex.png";
import celestialLogo from "../assets/logo-celestial.png";
import pulseLogo from "../assets/logo-pulse.png";
import quantamLogo from "../assets/logo-quantum.png";

export default function LogoTicker() {
  return (
    <div className="p-8 bg-white">
      <div className="flex justify-between overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] gap-14">
        <img src={echoLogo} className="h-6 w-auto" />
        <img src={acmeLogo} className="h-6 w-auto" />
        <img src={apexLogo} className="h-6 w-auto" />
        <img src={celestialLogo} className="h-6 w-auto" />
        <img src={pulseLogo} className="h-6 w-auto" />
        <img src={quantamLogo} className="h-6 w-auto" />
      </div>
    </div>
  );
}
