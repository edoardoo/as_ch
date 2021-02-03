//    Write a class with a method/function to get a users "frequency-type" for a given website inside a given class.
//    "Frequency-type" is defined as the users behaviour how often the user visits the website.
//    requirements:
//    - preconditions:
//         - the following object stores "segment ids" (or just think of defined names) in an array. See example:
//          window.Kameleoon.API.CurrentVisit.customData.Piano  =  [
//             "lowfrequencyUser",
//             "mediumfrequencyUser",
//             "highfrequencyUser",
//             "iOSUser",
//             "androidUser",
//             "windowsUsers"
//          ];
//         - note that not all segment ids are frequency segments, some of them store the device information or something else
//         - you need to call another function called isFrequencyTypeSegment (already implemented in the same class)
//         - this function will tell you if this segment is from type frequency or not
//         - isFrequencyTypeSegment has two parameters(domain: string, segmentID: string)
//         - in some cases the object window.Kameleoon.API.CurrentVisit.customData.Piano does not exists and has to be populated with data
//         - to populate this object use this given function:  window.cX.getUserSegmentIds({persistedQueryId: persistedQueryIdValue});
//         - each domain has a different persistedQueryIdValue  like:   welt.de  has persistedQueryIdValue = "abcdef",   bild.de has persistedQueryIdValue = "ghijkl"
//    - use typescript
//    - make this function bulletproof
//    - function definition as follows:
//      * function: getFrequencyTypeSegment,
//      * example function call: getFrequencyTypeSegment("welt.de")
//      * this returns frequency segment id for this domain for this user, example:   "highfrequencyUser"
//      *
//      * @param domain: string, defines the website domain you are interested in
//      * @returns string
//
//==========================================================================================================//
//
//
// let segmentIDs: object
// segmentIDs = {window.Kameleoon.API.CurrentVisit.customData.Piano = [
//         "lowfrequencyUser",
//         "mediumfrequencyUser",
//         "highfrequencyUser",
//         "iOSUser",
//         "androidUser",
//         "windowsUsers"
//      ]}
// class classOne {
//     name: string;
//     constructor(siteName: string) {
//         this.name = siteName;
//     }
//     isFrequencyTypeSegment(domain: string, segmentID: string) {
//         if (!window.Kameleoon.API.CurrentVisit.customData.Piano) {
//             window.cX.getUserSegmentIds({
//                 persistedQueryId: persistedQueryIdValue,
//             });
//         }
//     }
//     getFrequencyTypeSegment(domain: string): string {
//         //returns FrequencyType - how often the user visits the website
//     }
// }
//
//==========================================================================================================//
//
//
//   Write a class with a method/function to add a defined css style to a website
//   requirements:
//    - use typescript
//    - make this function bulletproof
//    - function definition as follows:
//      * function: addCustomStyle, creates custom style element and appends to html body
//      * example function call: addCustomStyle("myStyle", ".someClassName", "{background-color: #cccccc }")
//      * this results in adding a style html element to the website with the given style definition <style id="myStyle"> .someClassName { background-color: #cccccc} </style>
//      *
//      * @param styleidentifier: string, defines id of the style element to identify the style for later usage
//      * @param selector: string, valid css selector
//      * @param attributes: any, object of css attributes with curly braces, example: { display: none }
//      * @param mediaQuerry?: string (optional), media querry for given stylesheet, example: "max-width: 909px"
//      * @returns void
//
//==========================================================================================================//
//
var classTwo = /** @class */ (function () {
    function classTwo(siteName) {
        this.name = siteName;
    }
    classTwo.prototype.addCustomStyle = function (identifier, selector, attr, mediaquery) {
        //check if args are valid???
        var style = document.createElement("style");
        style.innerHTML = selector + " " + attr;
        if (mediaquery) {
            style.innerHTML = "@media screen and (" + mediaquery + "){" + selector + " " + attr + "}";
        }
        style.id = identifier;
        var firstScript = document.querySelector("script");
        firstScript.parentNode.insertBefore(style, firstScript);
    };
    return classTwo;
}());
var mysite = new classTwo("http://mysite.com/");
mysite.addCustomStyle("myStyle", ".myClass", "{ background-color: blue }", "max-width: 909px");
