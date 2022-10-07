const width = "100%";
const height = "100%";
const quoteCard = (
  textColor,
  bg,
  borderColor,
  codeColor,
  qoute,
  hideBorder
) => {
  let border = `2px solid ${borderColor}`;
  if (hideBorder !== undefined) {
    border = "2px solid transparent";
  }
  const card = `
    <svg class="" onload="myfunc()" id="quoteC" fill="none" xmlns="http://www.w3.org/2000/svg">
    <script>
          const myfunc = () => {
            let text = document.getElementsByClassName("text");
            let quoteC = document.getElementById("quoteC");
            if(window.screen.availWidth > 425){
              text[0].classList.add("desktop");
              quoteC.classList.add("qwidthDesktop");
            }
            else{
              text[0].classList.add("mobile");
              quoteC.classList.add("qwidthMobile");
            }
            console.log(quoteC.classList, text.classList);
          }
    </script>
      <foreignObject width="${width}" height="${height}">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <style>
            .qwidthDesktop{
              width: 500px;
            }
            .qwidthMobile{
              width: 80%;
            }
            .container {
              border: ${border};
              border-radius: 10px;
              background: ${bg};
            }
            .desktop{
              font-size: 18px;
            }
            .mobile{
              font-size: 45px;
            }
            .text{
              padding: 0.5rem;
              font-family: Arial, Helvetica, sans-serif;
            }
            .quote {
              color: ${textColor};
            }
            code {
              font-size: 1.2rem;
              color: ${codeColor};
            }
          </style>
          <div class="container">
            <div class="text">
              <p class="quote">${qoute}</p>
            </div>
          </div>
        </div>
      </foreignObject>
    </svg>
    `;
  return card;
};

module.exports = { quoteCard };
