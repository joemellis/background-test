document.addEventListener('DOMContentLoaded', function() {
    const backgroundLayer = document.querySelector('.background-layer');
    const slider = document.getElementById('gradientSlider');
  
    function updateGradient() {
      const value = slider.value / 100;
      const lightBlue = [135, 206, 250];  // RGB values for light blue
      const darkBlue = [0, 0, 102];      // RGB values for dark blue
      const white =[250, 250, 250];
      const black =[0, 0, 0];
      const blendedColor = blendColors(lightBlue, darkBlue, value);
      const blendedColor2 = blendColors2(white, black, value);
      backgroundLayer.style.transition = 'background 0.5s ease-in-out';
      backgroundLayer.style.background = `linear-gradient(to bottom, rgb(${blendedColor.join(',')}), rgb(${blendedColor2.join(',')})`;
    }
  
    window.updateGradient = updateGradient; // Make updateGradient globally accessible
  
    // Function to blend two colors
    function blendColors(color1, color2, ratio) {
      const blendedColor = color1.map((channel, index) =>
        Math.round(channel * (1 - ratio) + color2[index] * ratio)
      );
      return blendedColor;
    }

    function blendColors2(color1, color2, ratio) {
        const blendedColor2 = color1.map((channel, index) =>
          Math.round(channel * (1 - ratio) + color2[index] * ratio)
        );
        return blendedColor2;
      }
  });
  