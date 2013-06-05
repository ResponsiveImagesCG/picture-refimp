(function(window, srcsetParser) {
    var imgs = findImages(),
        resolver = new Resolver();

    //listen for loading things
    document.body.addEventListener('load', function() {
        console.log(e.target);
    }, true);

    function findImages() {
        var imgElems = document.querySelectorAll('img'),
            imgs = [];
        for (var i = imgElems.length - 1; i >= 0; i--) {
            imgs = {
                img: imgs[i]
            };
        }
        return imgs;
    }

    function isCompletelyAvailable(img) {
        if (img.width === 0 && img.height === 0) {
            return false;
        }
    }

    function processImg() {
        //⌛ If the img element does not have a srcset attribute specified,
        //is not in the completely available state,
        //has image data whose resource type is multipart/x-mixed-replace,
        //or if its update the image data algorithm is running,
        //then abort this algorithm.
        if (!this.hasAttribute('srcset') && !this.complete) {
            return;
        }

        //⌛ Let selected source and selected pixel density be the URL and pixel density
        //that results from processing the image candidates, respectively.
        var result = srcsetParser(elem.getAttributeNode('srcset')),
            selectedSource = result.url,
            selectedPixelDensity = result.density,
            CORSMode;

        //⌛ If selected source is null, then abort these steps.
        if (selectedSource === null) {
            return;
        }

        //⌛ If selected source and selected pixel density are the same as
        //the element's last selected source and current pixel density,
        //then abort these steps.


        //⌛ Resolve selected source, relative to the element.
        resolvedURL = resolver.resolve(selectedSource);

        //⌛ Let CORS mode be the state of the element's crossorigin content attribute.
        CORSMode = elem.getAttribute('crossorigin');

        //⌛ If the resolve a URL algorithm is not successful, abort these steps.


        //End the synchronous section, continuing the remaining steps asynchronously.
        setTimeout(asyncPortion, 1);

        function asyncPortion() {
            //Do a potentially CORS-enabled fetch of the resulting absolute URL,
            //with the mode being CORS mode, the origin being the origin of the img element's Document,
            //and the default origin behaviour set to taint.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', resolvedURL, true);
            xhr.responseType = 'blob';

            //If this download fails in any way (other than the response code not being a 2xx code,
            //as mentioned earlier), or if the image format is unsupported
            //(as determined by applying the image sniffing rules, again as mentioned earlier),
            //or if the resource type is multipart/x-mixed-replace, then abort these steps.
            /* */



            //Otherwise, wait for the fetch algorithm to queue its last task,
            //and then continue with these steps.
            //The data obtained in this way is used in the steps below.

            //Queue a task to run the following substeps:
            //If the img element's src, srcset, or crossorigin attributes have been set,
            //changed, or removed since this algorithm started, then abort these steps.

            //Let the img element's last selected source be selected source and the
            //img element's current pixel density be selected pixel density.

            //Replace the img element's image data with the resource obtained by
            //the earlier step of this algorithm. It can be either CORS-same-origin
            //or CORS-cross-origin; this affects the origin of the image itself
            //(e.g. when used on a canvas).
            //Fire a simple event named load at the img element.
            var e = new CustomEvent('load');
            img.dispatchEvent(e);
        }
    }

    function Resolver() {
        var a = window.document.createElement('a');
        this.resolve = function(url) {
            a.href = url;
            return a.href;
        };
    }

}(window, window.srcsetParser));
