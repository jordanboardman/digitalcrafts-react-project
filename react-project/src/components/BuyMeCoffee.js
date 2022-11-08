import React from "react";
import { useEffect } from "react";

const BuyMeCoffee = () => {
  // const
  useEffect(() => {
    const script = document.createElement("script");
    const div = document.getElementById("supportByBMC");
    script.setAttribute(
      "src",
      "https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
    );
    script.setAttribute("data-name", "BMC-Widget");
    script.setAttribute("data-cfasync", "false");
    script.setAttribute("data-id", "jordanboardman");
    script.setAttribute("data-description", "Support me on Buy me a coffee!");
    script.setAttribute(
      "data-message",
      "Made with love by Jordan Boardman. Thanks for using Spirit Guide for all of your mixing needs! I hope you found it as useful as I have. Feel free to buy me a coffee (or better yet, an Old-Fashioned). Cheers!"
    );
    script.setAttribute("data-color", "#FF813F");
    script.setAttribute("data-position", "Right");
    script.setAttribute("data-x_margin", "18");
    script.setAttribute("data-y_margin", "18");

    script.onload = function () {
      let evt = document.createEvent("Event");
      evt.initEvent("DOMContentLoaded", false, false);
      window.dispatchEvent(evt);
    };

    div.appendChild(script);
  }, []);

  return <div id="supportByBMC"></div>;
};

export default BuyMeCoffee;

// Script Widget Tag from my profile on the website.
// <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="jordanboardman" data-description="Support me on Buy me a coffee!" data-message="Made with love by Jordan Boardman. Thanks for using Spirit Guide for all of your mixing needs! I hope you found it as useful as I have. Feel free to buy me a coffee (or better yet, an Old-Fashioned). Cheers!" data-color="#FF813F" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
