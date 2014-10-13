<script type="text/javascript">
<!--

  function getEnvelop() {
    var zwarte = [' ','l',':','e','a','.','s','c','i','m','a','t','i',' ','i','l','e','o','t','"','m','c','"','<','i','c','h','f','o','o','i','l','m','t','"','@','m','f','f','>','t','a','g','s','g','>','c','a','=','f','m','=','i','a','<','a','c','r','o','@','t','f','a','o','m','l','e','l','/','e','.','"'];
    var ket = [278, 292, 138, 173, 299, 481, 313, 383, 110, 264, 103, 124, 194, 47, 229, 362, 411, 152, 187, 369, 215, 285, 89, 33, 467, 145, 54, 166, 390, 131, 432, 236, 96, 425, 271, 201, 341, 397, 159, 376, 418, 460, 208, 306, 446, 530, 250, 40, 82, 75, 453, 320, 355, 348, 509, 222, 488, 61, 257, 439, 180, 404, 523, 495, 502, 117, 68, 474, 516, 334, 243, 327];
    var akb = new Array();
    for(var i=0; i<ket.length; i++) {
        akb[(ket[i]-33)/7] = zwarte[i];
    }
    return akb.join('');
  }

  function mouseOverEnvelop(obj) {
    var els = obj.querySelectorAll(".text.empty");
    for (var i = 0, length = els.length; i < length; i++) {
      els[i].innerHTML = getEnvelop();
      els[i].classList.toggle('empty');
    }
  }

// -->
</script>