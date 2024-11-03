(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/.pnpm/random-word-slugs@0.1.7/node_modules/random-word-slugs/dist/words.js
  var require_words = __commonJS({
    "node_modules/.pnpm/random-word-slugs@0.1.7/node_modules/random-word-slugs/dist/words.js"(exports) {
      "use strict";
      var __values = exports && exports.__values || function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function() {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getWordsByCategory = exports.wordList = void 0;
      exports.wordList = {
        noun: [
          { word: "accountant", categories: ["profession"] },
          { word: "ability", categories: ["thing"] },
          { word: "accident", categories: ["thing"] },
          { word: "account", categories: ["thing"] },
          { word: "action", categories: ["thing"] },
          { word: "activity", categories: ["thing"] },
          { word: "actor", categories: ["profession"] },
          { word: "ad", categories: ["media"] },
          { word: "addition", categories: ["thing"] },
          { word: "address", categories: ["thing"] },
          { word: "adult", categories: ["people"] },
          { word: "advantage", categories: ["thing"] },
          { word: "advertisement", categories: ["media"] },
          { word: "afternoon", categories: ["time"] },
          { word: "agency", categories: ["thing"] },
          { word: "agent", categories: ["people"] },
          { word: "air", categories: ["thing"] },
          { word: "airline", categories: ["transportation"] },
          { word: "airplane", categories: ["transportation"] },
          { word: "airport", categories: ["transportation", "place"] },
          { word: "alarm", categories: ["thing"] },
          { word: "alligator", categories: ["animals"] },
          { word: "ambulance", categories: ["health"] },
          { word: "analyst", categories: ["profession"] },
          { word: "angle", categories: ["thing"] },
          { word: "animal", categories: ["animals"] },
          { word: "answer", categories: ["thing"] },
          { word: "apartment", categories: ["place"] },
          { word: "apple", categories: ["food"] },
          { word: "application", categories: ["thing"] },
          { word: "appointment", categories: ["thing"] },
          { word: "architect", categories: ["profession"] },
          { word: "argument", categories: ["thing"] },
          { word: "area", categories: ["thing"] },
          { word: "arm", categories: ["thing"] },
          { word: "army", categories: ["thing"] },
          { word: "art", categories: ["thing"] },
          { word: "article", categories: ["thing"] },
          { word: "artist", categories: ["profession"] },
          { word: "australia", categories: ["place"] },
          { word: "author", categories: ["profession"] },
          { word: "autumn", categories: ["time"] },
          { word: "baby", categories: ["people", "family"] },
          { word: "baker", categories: ["profession"] },
          { word: "balloon", categories: ["thing"] },
          { word: "banana", categories: ["food"] },
          { word: "barista", categories: ["profession"] },
          { word: "battery", categories: ["thing"] },
          { word: "beach", categories: ["place"] },
          { word: "bear", categories: ["animals"] },
          { word: "beard", categories: ["thing"] },
          { word: "bed", categories: ["thing"] },
          { word: "belgium", categories: ["place"] },
          { word: "bird", categories: ["animals"] },
          { word: "bit", categories: ["thing", "technology"] },
          { word: "book", categories: ["thing", "education"] },
          { word: "boots", categories: ["thing"] },
          { word: "boy", categories: ["people"] },
          { word: "branch", categories: ["thing"] },
          { word: "breakfast", categories: ["thing"] },
          { word: "brother", categories: ["family"] },
          { word: "businessperson", categories: ["people", "business"] },
          { word: "butcher", categories: ["profession"] },
          { word: "byte", categories: ["thing", "technology"] },
          { word: "camera", categories: ["thing"] },
          { word: "candle", categories: ["thing"] },
          { word: "car", categories: ["transportation"] },
          { word: "caravan", categories: ["transportation"] },
          { word: "carpenter", categories: ["profession"] },
          { word: "carpet", categories: ["thing"] },
          { word: "cartoon", categories: ["media"] },
          { word: "cat", categories: ["animals"] },
          { word: "chef", categories: ["profession"] },
          { word: "child", categories: ["people", "family"] },
          { word: "china", categories: ["place"] },
          { word: "church", categories: ["religion"] },
          { word: "city", categories: ["place"] },
          { word: "coat", categories: ["thing"] },
          { word: "coffeeshop", categories: ["place"] },
          { word: "computer", categories: ["thing", "technology"] },
          { word: "continent", categories: ["place"] },
          { word: "controller", categories: ["thing", "technology"] },
          { word: "country", categories: ["place"] },
          { word: "cpu", categories: ["thing", "technology"] },
          { word: "crayon", categories: ["thing"] },
          { word: "cricket", categories: ["animals"] },
          { word: "crowd", categories: ["people"] },
          { word: "daughter", categories: ["family"] },
          { word: "dawn", categories: ["time"] },
          { word: "daybreak", categories: ["time"] },
          { word: "death", categories: ["thing"] },
          { word: "denmark", categories: ["place"] },
          { word: "dentist", categories: ["profession"] },
          { word: "diamond", categories: ["thing"] },
          { word: "dinner", categories: ["food"] },
          { word: "disease", categories: ["thing"] },
          { word: "doctor", categories: ["profession"] },
          { word: "dog", categories: ["animals"] },
          { word: "dream", categories: ["thing"] },
          { word: "dress", categories: ["thing"] },
          { word: "dusk", categories: ["time"] },
          { word: "easter", categories: ["religion"] },
          { word: "egg", categories: ["food"] },
          { word: "eggplant", categories: ["food"] },
          { word: "egypt", categories: ["place"] },
          { word: "electrician", categories: ["profession"] },
          { word: "elephant", categories: ["animals"] },
          { word: "energy", categories: ["thing"] },
          { word: "engine", categories: ["transportation"] },
          { word: "engineer", categories: ["profession"] },
          { word: "england", categories: ["place"] },
          { word: "eve", categories: ["time"] },
          { word: "evening", categories: ["time"] },
          { word: "eventide", categories: ["time"] },
          { word: "exabyte", categories: ["thing", "technology"] },
          { word: "eye", categories: ["thing"] },
          { word: "fall", categories: ["time"] },
          { word: "family", categories: ["family"] },
          { word: "farmer", categories: ["profession"] },
          { word: "father", categories: ["people", "family"] },
          { word: "finland", categories: ["place"] },
          { word: "fireman", categories: ["profession"] },
          { word: "fish", categories: ["animals"] },
          { word: "flag", categories: ["thing"] },
          { word: "florist", categories: ["profession"] },
          { word: "flower", categories: ["thing"] },
          { word: "football", categories: ["sports"] },
          { word: "forest", categories: ["place"] },
          { word: "fountain", categories: ["thing"] },
          { word: "france", categories: ["place"] },
          { word: "furniture", categories: ["thing"] },
          { word: "garage", categories: ["place"] },
          { word: "garden", categories: ["food"] },
          { word: "gas", categories: ["transportation"] },
          { word: "ghost", categories: ["thing"] },
          { word: "gigabyte", categories: ["thing", "technology"] },
          { word: "girl", categories: ["people"] },
          { word: "glass", categories: ["thing"] },
          { word: "gold", categories: ["thing"] },
          { word: "gpu", categories: ["thing", "technology"] },
          { word: "grandmother", categories: ["people", "family"] },
          { word: "grass", categories: ["thing"] },
          { word: "greece", categories: ["place"] },
          { word: "guitar", categories: ["thing"] },
          { word: "hair", categories: ["thing"] },
          { word: "hairdresser", categories: ["profession"] },
          { word: "hamburger", categories: ["food"] },
          { word: "helicopter", categories: ["transportation"] },
          { word: "helmet", categories: ["thing"] },
          { word: "holiday", categories: ["thing"] },
          { word: "honey", categories: ["food"] },
          { word: "horse", categories: ["animals"] },
          { word: "hospital", categories: ["place"] },
          { word: "house", categories: ["place"] },
          { word: "hydrogen", categories: ["science"] },
          { word: "ice", categories: ["science"] },
          { word: "insect", categories: ["animals"] },
          { word: "insurance", categories: ["thing"] },
          { word: "intern", categories: ["profession"] },
          { word: "iron", categories: ["science"] },
          { word: "island", categories: ["place"] },
          { word: "jackal", categories: ["animals"] },
          { word: "jelly", categories: ["food"] },
          { word: "jewellery", categories: ["thing"] },
          { word: "jordan", categories: ["place"] },
          { word: "journalist", categories: ["profession"] },
          { word: "joystick", categories: ["thing", "technology"] },
          { word: "judge", categories: ["profession"] },
          { word: "juice", categories: ["food"] },
          { word: "kangaroo", categories: ["animals"] },
          { word: "keyboard", categories: ["thing", "technology"] },
          { word: "kilobyte", categories: ["thing", "technology"] },
          { word: "king", categories: ["people"] },
          { word: "kitchen", categories: ["place"] },
          { word: "kite", categories: ["thing"] },
          { word: "knife", categories: ["thing"] },
          { word: "lamp", categories: ["thing"] },
          { word: "laptop", categories: ["thing", "technology"] },
          { word: "lawyer", categories: ["profession"] },
          { word: "leather", categories: ["thing"] },
          { word: "librarian", categories: ["profession"] },
          { word: "library", categories: ["place"] },
          { word: "lifeguard", categories: ["profession"] },
          { word: "lighter", categories: ["thing"] },
          { word: "lion", categories: ["animals"] },
          { word: "lizard", categories: ["animals"] },
          { word: "lock", categories: ["thing"] },
          { word: "london", categories: ["place"] },
          { word: "lunch", categories: ["food"] },
          { word: "machine", categories: ["science"] },
          { word: "magazine", categories: ["media"] },
          { word: "magician", categories: ["people"] },
          { word: "man", categories: ["people"] },
          { word: "manchester", categories: ["place"] },
          { word: "market", categories: ["place"] },
          { word: "match", categories: ["thing"] },
          { word: "mechanic", categories: ["profession"] },
          { word: "megabyte", categories: ["thing", "technology"] },
          { word: "memory", categories: ["thing", "technology"] },
          { word: "microphone", categories: ["thing"] },
          { word: "midnight", categories: ["time"] },
          { word: "minister", categories: ["people", "religion"] },
          { word: "monitor", categories: ["thing", "technology"] },
          { word: "monkey", categories: ["animals"] },
          { word: "morn", categories: ["time"] },
          { word: "morning", categories: ["time"] },
          { word: "mother", categories: ["people", "family"] },
          { word: "motherboard", categories: ["thing", "technology"] },
          { word: "motorcycle", categories: ["transportation"] },
          { word: "mouse", categories: ["thing", "technology", "animals"] },
          { word: "musician", categories: ["profession"] },
          { word: "nail", categories: ["thing"] },
          { word: "napkin", categories: ["thing"] },
          { word: "needle", categories: ["thing"] },
          { word: "nest", categories: ["thing"] },
          { word: "nigeria", categories: ["place"] },
          { word: "night", categories: ["time"] },
          { word: "nightfall", categories: ["time"] },
          { word: "noon", categories: ["time"] },
          { word: "notebook", categories: ["thing"] },
          { word: "nurse", categories: ["profession"] },
          { word: "ocean", categories: ["place"] },
          { word: "oil", categories: ["thing"] },
          { word: "optician", categories: ["profession"] },
          { word: "orange", categories: ["food"] },
          { word: "oxygen", categories: ["science"] },
          { word: "oyster", categories: ["animals"] },
          { word: "pager", categories: ["thing", "technology"] },
          { word: "painter", categories: ["profession"] },
          { word: "painting", categories: ["media"] },
          { word: "park", categories: ["place"] },
          { word: "parrot", categories: ["animals"] },
          { word: "pencil", categories: ["thing", "education"] },
          { word: "petabyte", categories: ["thing", "technology"] },
          { word: "pharmacist", categories: ["profession"] },
          { word: "photographer", categories: ["profession"] },
          { word: "piano", categories: ["thing"] },
          { word: "pillow", categories: ["thing"] },
          { word: "pilot", categories: ["profession"] },
          { word: "pizza", categories: ["food"] },
          { word: "planet", categories: ["science"] },
          { word: "plastic", categories: ["thing"] },
          { word: "plumber", categories: ["profession"] },
          { word: "policeman", categories: ["profession"] },
          { word: "portugal", categories: ["place"] },
          { word: "postman", categories: ["profession"] },
          { word: "potato", categories: ["food"] },
          { word: "printer", categories: ["thing", "technology"] },
          { word: "processor", categories: ["thing", "technology"] },
          { word: "psychiatrist", categories: ["profession"] },
          { word: "queen", categories: ["people"] },
          { word: "quill", categories: ["thing"] },
          { word: "rain", categories: ["thing"] },
          { word: "rainbow", categories: ["science"] },
          { word: "raincoat", categories: ["thing"] },
          { word: "ram", categories: ["thing", "technology"] },
          { word: "receptionist", categories: ["profession"] },
          { word: "refrigerator", categories: ["food"] },
          { word: "restaurant", categories: ["place"] },
          { word: "river", categories: ["thing"] },
          { word: "rocket", categories: ["science"] },
          { word: "room", categories: ["place"] },
          { word: "rose", categories: ["thing"] },
          { word: "russia", categories: ["place"] },
          { word: "salesclerk", categories: ["people", "business"] },
          { word: "salesmen", categories: ["profession"] },
          { word: "sandwich", categories: ["food"] },
          { word: "school", categories: ["education"] },
          { word: "scientist", categories: ["profession"] },
          { word: "scooter", categories: ["transportation"] },
          { word: "secretary", categories: ["profession"] },
          { word: "shampoo", categories: ["thing"] },
          { word: "shoe", categories: ["thing"] },
          { word: "smartphone", categories: ["thing", "technology"] },
          { word: "soccer", categories: ["sports"] },
          { word: "solstice", categories: ["time"] },
          { word: "spoon", categories: ["thing"] },
          { word: "spring", categories: ["time"] },
          { word: "state", categories: ["place"] },
          { word: "stone", categories: ["thing"] },
          { word: "student", categories: ["people", "education"] },
          { word: "sugar", categories: ["food"] },
          { word: "summer", categories: ["time"] },
          { word: "sundown", categories: ["time"] },
          { word: "sunset", categories: ["time"] },
          { word: "sweden", categories: ["place"] },
          { word: "table", categories: ["thing"] },
          { word: "tailor", categories: ["profession"] },
          { word: "teacher", categories: ["people", "education", "profession"] },
          { word: "teenager", categories: ["people", "family"] },
          { word: "telephone", categories: ["thing"] },
          { word: "television", categories: ["media"] },
          { word: "tent", categories: ["thing"] },
          { word: "terabyte", categories: ["thing", "technology"] },
          { word: "thailand", categories: ["place"] },
          { word: "tiger", categories: ["animals"] },
          { word: "toddler", categories: ["people", "family"] },
          { word: "tomato", categories: ["food"] },
          { word: "toothbrush", categories: ["thing"] },
          { word: "traffic", categories: ["thing"] },
          { word: "train", categories: ["transportation"] },
          { word: "translator", categories: ["profession"] },
          { word: "truck", categories: ["thing", "transportation"] },
          { word: "twilight", categories: ["time"] },
          { word: "uganda", categories: ["place"] },
          { word: "umbrella", categories: ["thing"] },
          { word: "van", categories: ["transportation"] },
          { word: "vase", categories: ["thing"] },
          { word: "vegetable", categories: ["food"] },
          { word: "vr", categories: ["thing", "technology"] },
          { word: "vulture", categories: ["animals"] },
          { word: "waiter", categories: ["profession"] },
          { word: "waitress", categories: ["profession"] },
          { word: "wall", categories: ["thing"] },
          { word: "whale", categories: ["animals"] },
          { word: "window", categories: ["thing"] },
          { word: "winter", categories: ["time"] },
          { word: "wire", categories: ["thing"] },
          { word: "wolf", categories: ["animals"] },
          { word: "woman", categories: ["people"] },
          { word: "xylophone", categories: ["thing"] },
          { word: "yacht", categories: ["transportation"] },
          { word: "yak", categories: ["animals"] },
          { word: "yottabyte", categories: ["thing", "technology"] },
          { word: "zebra", categories: ["animals"] },
          { word: "zettabyte", categories: ["thing", "technology"] },
          { word: "zoo", categories: ["animals"] }
        ],
        adjective: [
          { word: "abandoned", categories: ["condition"] },
          { word: "abiding", categories: ["personality"] },
          { word: "able", categories: ["condition"] },
          { word: "abrasive", categories: ["condition", "personality"] },
          { word: "abnormal", categories: ["condition"] },
          { word: "absurd", categories: ["condition"] },
          { word: "abundant", categories: ["quantity"] },
          { word: "acceptable", categories: ["condition"] },
          { word: "acidic", categories: ["taste"] },
          { word: "acoustic", categories: ["sounds"] },
          { word: "acrid", categories: ["condition"] },
          { word: "adamant", categories: ["personality"] },
          { word: "adorable", categories: ["personality"] },
          { word: "adventurous", categories: ["personality"] },
          { word: "aggressive", categories: ["personality"] },
          { word: "agitated", categories: ["personality"] },
          { word: "agreeable", categories: ["personality"] },
          { word: "alert", categories: ["condition"] },
          { word: "alive", categories: ["condition"] },
          { word: "aloof", categories: ["personality"] },
          { word: "ambitious", categories: ["personality"] },
          { word: "ancient", categories: ["time"] },
          { word: "angry", categories: ["personality"] },
          { word: "annoyed", categories: ["personality"] },
          { word: "antsy", categories: ["personality"] },
          { word: "anxious", categories: ["personality"] },
          { word: "appalling", categories: ["personality"] },
          { word: "appetizing", categories: ["taste"] },
          { word: "apprehensive", categories: ["personality"] },
          { word: "arrogant", categories: ["personality"] },
          { word: "ashamed", categories: ["personality"] },
          { word: "astonishing", categories: ["personality"] },
          { word: "attractive", categories: ["appearance"] },
          { word: "average", categories: ["appearance"] },
          { word: "bad", categories: ["condition"] },
          { word: "bald", categories: ["appearance"] },
          { word: "bashful", categories: ["personality"] },
          { word: "beautiful", categories: ["appearance"] },
          { word: "beefy", categories: ["appearance"] },
          { word: "belligerent", categories: ["personality"] },
          { word: "bent", categories: ["condition"] },
          { word: "best", categories: ["condition"] },
          { word: "better", categories: ["condition"] },
          { word: "bewildered", categories: ["personality"] },
          { word: "big", categories: ["size"] },
          { word: "billions", categories: ["quantity"] },
          { word: "billowy", categories: ["appearance"] },
          { word: "bitter", categories: ["taste"] },
          { word: "black", categories: ["color"] },
          { word: "bland", categories: ["taste"] },
          { word: "blue", categories: ["color"] },
          { word: "blushing", categories: ["appearance"] },
          { word: "bored", categories: ["personality"] },
          { word: "boring", categories: ["personality"] },
          { word: "boundless", categories: ["personality"] },
          { word: "brainy", categories: ["personality"] },
          { word: "brash", categories: ["personality"] },
          { word: "brave", categories: ["personality"] },
          { word: "breezy", categories: ["touch"] },
          { word: "brief", categories: ["time"] },
          { word: "bright", categories: ["appearance"] },
          { word: "broad", categories: ["shapes"] },
          { word: "broken", categories: ["condition"] },
          { word: "brown", categories: ["color"] },
          { word: "bulky", categories: ["appearance"] },
          { word: "bumpy", categories: ["touch"] },
          { word: "burly", categories: ["appearance"] },
          { word: "busy", categories: ["personality"] },
          { word: "cagey", categories: ["personality"] },
          { word: "calm", categories: ["personality"] },
          { word: "callous", categories: ["personality"] },
          { word: "careful", categories: ["condition"] },
          { word: "chilly", categories: ["touch"] },
          { word: "chubby", categories: ["appearance"] },
          { word: "clean", categories: ["appearance"] },
          { word: "clever", categories: ["condition"] },
          { word: "clumsy", categories: ["personality"] },
          { word: "cold", categories: ["touch"] },
          { word: "colossal", categories: ["size"] },
          { word: "cool", categories: ["touch"] },
          { word: "crashing", categories: ["sounds"] },
          { word: "creamy", categories: ["taste"] },
          { word: "crooked", categories: ["shapes"] },
          { word: "cuddly", categories: ["touch"] },
          { word: "curved", categories: ["shapes"] },
          { word: "damaged", categories: ["touch"] },
          { word: "damp", categories: ["touch"] },
          { word: "dazzling", categories: ["appearance"] },
          { word: "dead", categories: ["condition"] },
          { word: "deafening", categories: ["sounds"] },
          { word: "deep", categories: ["shapes"] },
          { word: "defeated", categories: ["personality"] },
          { word: "delicious", categories: ["taste"] },
          { word: "delightful", categories: ["personality"] },
          { word: "dirty", categories: ["touch"] },
          { word: "disgusting", categories: ["taste"] },
          { word: "drab", categories: ["appearance"] },
          { word: "dry", categories: ["touch"] },
          { word: "eager", categories: ["personality"] },
          { word: "early", categories: ["time"] },
          { word: "easy", categories: ["condition"] },
          { word: "echoing", categories: ["sounds"] },
          { word: "elegant", categories: ["appearance"] },
          { word: "embarrassed", categories: ["personality"] },
          { word: "enough", categories: ["quantity"] },
          { word: "faint", categories: ["sounds"] },
          { word: "faithful", categories: ["personality"] },
          { word: "famous", categories: ["condition"] },
          { word: "fancy", categories: ["appearance"] },
          { word: "fast", categories: ["time"] },
          { word: "fat", categories: ["size"] },
          { word: "few", categories: ["quantity"] },
          { word: "fierce", categories: ["personality"] },
          { word: "fit", categories: ["appearance"] },
          { word: "flabby", categories: ["appearance"] },
          { word: "flaky", categories: ["touch"] },
          { word: "flat", categories: ["shapes"] },
          { word: "fluffy", categories: ["touch"] },
          { word: "freezing", categories: ["touch"] },
          { word: "fresh", categories: ["taste"] },
          { word: "full", categories: ["quantity"] },
          { word: "future", categories: ["time"] },
          { word: "gentle", categories: ["personality"] },
          { word: "gifted", categories: ["condition"] },
          { word: "gigantic", categories: ["size"] },
          { word: "glamorous", categories: ["appearance"] },
          { word: "gorgeous", categories: ["appearance"] },
          { word: "gray", categories: ["color"] },
          { word: "greasy", categories: ["touch", "taste"] },
          { word: "great", categories: ["size"] },
          { word: "green", categories: ["color"] },
          { word: "grumpy", categories: ["personality"] },
          { word: "hallowed", categories: ["condition"] },
          { word: "handsome", categories: ["appearance"] },
          { word: "happy", categories: ["personality"] },
          { word: "harsh", categories: ["sounds"] },
          { word: "helpful", categories: ["condition"] },
          { word: "helpless", categories: ["personality"] },
          { word: "high", categories: ["shapes"] },
          { word: "hissing", categories: ["sounds"] },
          { word: "hollow", categories: ["shapes"] },
          { word: "hot", categories: ["touch", "taste"] },
          { word: "howling", categories: ["sounds"] },
          { word: "huge", categories: ["size"] },
          { word: "hundreds", categories: ["quantity"] },
          { word: "icy", categories: ["touch"] },
          { word: "immense", categories: ["size"] },
          { word: "important", categories: ["condition"] },
          { word: "incalculable", categories: ["quantity"] },
          { word: "inexpensive", categories: ["condition"] },
          { word: "itchy", categories: ["personality"] },
          { word: "jealous", categories: ["personality"] },
          { word: "jolly", categories: ["personality"] },
          { word: "juicy", categories: ["taste"] },
          { word: "kind", categories: ["personality"] },
          { word: "large", categories: ["size"] },
          { word: "late", categories: ["time"] },
          { word: "lazy", categories: ["personality"] },
          { word: "lemon", categories: ["color"] },
          { word: "limited", categories: ["quantity"] },
          { word: "little", categories: ["size", "quantity"] },
          { word: "lively", categories: ["personality"] },
          { word: "long", categories: ["time", "appearance"] },
          { word: "loose", categories: ["touch"] },
          { word: "loud", categories: ["sounds"] },
          { word: "low", categories: ["shapes"] },
          { word: "magnificent", categories: ["appearance"] },
          { word: "mammoth", categories: ["size"] },
          { word: "mango", categories: ["color"] },
          { word: "many", categories: ["quantity"] },
          { word: "massive", categories: ["size"] },
          { word: "mealy", categories: ["condition"] },
          { word: "melodic", categories: ["sounds"] },
          { word: "melted", categories: ["touch"] },
          { word: "microscopic", categories: ["size"] },
          { word: "millions", categories: ["quantity"] },
          { word: "miniature", categories: ["size"] },
          { word: "modern", categories: ["time"] },
          { word: "moldy", categories: ["taste"] },
          { word: "most", categories: ["quantity"] },
          { word: "muscular", categories: ["appearance"] },
          { word: "mushy", categories: ["condition"] },
          { word: "mysterious", categories: ["personality"] },
          { word: "narrow", categories: ["shapes"] },
          { word: "nervous", categories: ["personality"] },
          { word: "nice", categories: ["personality"] },
          { word: "noisy", categories: ["sounds"] },
          { word: "numerous", categories: ["quantity"] },
          { word: "nutritious", categories: ["taste"] },
          { word: "nutty", categories: ["taste"] },
          { word: "obedient", categories: ["personality"] },
          { word: "obnoxious", categories: ["personality"] },
          { word: "odd", categories: ["condition"] },
          { word: "old", categories: ["time"] },
          { word: "orange", categories: ["color"] },
          { word: "panicky", categories: ["personality"] },
          { word: "petite", categories: ["size"] },
          { word: "pitiful", categories: ["personality"] },
          { word: "plain", categories: ["appearance"] },
          { word: "plump", categories: ["appearance"] },
          { word: "polite", categories: ["personality"] },
          { word: "poor", categories: ["condition"] },
          { word: "powerful", categories: ["condition"] },
          { word: "prehistoric", categories: ["time"] },
          { word: "prickly", categories: ["touch"] },
          { word: "proud", categories: ["personality"] },
          { word: "puny", categories: ["size"] },
          { word: "purple", categories: ["color"] },
          { word: "purring", categories: ["sounds"] },
          { word: "putrid", categories: ["taste"] },
          { word: "quaint", categories: ["appearance"] },
          { word: "quick", categories: ["time"] },
          { word: "quiet", categories: ["sounds"] },
          { word: "rancid", categories: ["taste"] },
          { word: "rapid", categories: ["time"] },
          { word: "rapping", categories: ["sounds"] },
          { word: "raspy", categories: ["sounds"] },
          { word: "red", categories: ["color"] },
          { word: "refined", categories: ["shapes"] },
          { word: "repulsive", categories: ["personality"] },
          { word: "rhythmic", categories: ["sounds"] },
          { word: "rich", categories: ["condition"] },
          { word: "ripe", categories: ["taste"] },
          { word: "rotten", categories: ["taste"] },
          { word: "rough", categories: ["touch"] },
          { word: "round", categories: ["shapes"] },
          { word: "salmon", categories: ["color"] },
          { word: "salty", categories: ["taste"] },
          { word: "savory", categories: ["taste"] },
          { word: "scarce", categories: ["quantity"] },
          { word: "scary", categories: ["personality"] },
          { word: "scrawny", categories: ["size"] },
          { word: "screeching", categories: ["sounds"] },
          { word: "scruffy", categories: ["appearance"] },
          { word: "shaggy", categories: ["touch"] },
          { word: "shallow", categories: ["shapes"] },
          { word: "shapely", categories: ["appearance"] },
          { word: "sharp", categories: ["touch"] },
          { word: "short", categories: ["size", "appearance", "time"] },
          { word: "shrilling", categories: ["sounds"] },
          { word: "shy", categories: ["condition"] },
          { word: "silly", categories: ["personality"] },
          { word: "skinny", categories: ["appearance", "shapes"] },
          { word: "slimy", categories: ["touch"] },
          { word: "slow", categories: ["time"] },
          { word: "small", categories: ["size"] },
          { word: "some", categories: ["quantity"] },
          { word: "sour", categories: ["taste"] },
          { word: "sparse", categories: ["quantity"] },
          { word: "spicy", categories: ["taste"] },
          { word: "spoiled", categories: ["taste"] },
          { word: "square", categories: ["shapes"] },
          { word: "squeaking", categories: ["sounds"] },
          { word: "stale", categories: ["taste"] },
          { word: "steep", categories: ["shapes"] },
          { word: "sticky", categories: ["touch"] },
          { word: "stocky", categories: ["appearance"] },
          { word: "straight", categories: ["shapes"] },
          { word: "strong", categories: ["touch"] },
          { word: "substantial", categories: ["quantity"] },
          { word: "sweet", categories: ["taste"] },
          { word: "swift", categories: ["time"] },
          { word: "tall", categories: ["size"] },
          { word: "tangy", categories: ["taste"] },
          { word: "tart", categories: ["taste"] },
          { word: "tasteless", categories: ["taste"] },
          { word: "tasty", categories: ["taste"] },
          { word: "teeny", categories: ["size"] },
          { word: "tender", categories: ["condition"] },
          { word: "thankful", categories: ["personality"] },
          { word: "thoughtless", categories: ["personality"] },
          { word: "thousands", categories: ["quantity"] },
          { word: "thundering", categories: ["sounds"] },
          { word: "tight", categories: ["touch"] },
          { word: "tinkling", categories: ["sounds"] },
          { word: "tiny", categories: ["size"] },
          { word: "ugly", categories: ["appearance"] },
          { word: "uneven", categories: ["touch"] },
          { word: "unimportant", categories: ["condition"] },
          { word: "uninterested", categories: ["condition"] },
          { word: "unkempt", categories: ["appearance"] },
          { word: "unsightly", categories: ["appearance"] },
          { word: "uptight", categories: ["personality"] },
          { word: "vast", categories: ["condition"] },
          { word: "victorious", categories: ["personality"] },
          { word: "wailing", categories: ["sounds"] },
          { word: "warm", categories: ["touch"] },
          { word: "weak", categories: ["touch"] },
          { word: "wet", categories: ["touch"] },
          { word: "whining", categories: ["sounds"] },
          { word: "whispering", categories: ["sounds"] },
          { word: "white", categories: ["color"] },
          { word: "wide", categories: ["shapes"] },
          { word: "witty", categories: ["personality"] },
          { word: "wonderful", categories: ["personality"] },
          { word: "wooden", categories: ["touch"] },
          { word: "worried", categories: ["personality"] },
          { word: "wrong", categories: ["condition"] },
          { word: "yellow", categories: ["color"] },
          { word: "young", categories: ["time"] },
          { word: "yummy", categories: ["taste"] },
          { word: "zealous", categories: ["personality"] }
        ]
      };
      function getWordsByCategory(partOfSpeech, categories) {
        var e_1, _a;
        if (categories === void 0) {
          categories = [];
        }
        var selectedCategoried = new Set(categories);
        var selectedWords = [];
        try {
          for (var _b = __values(exports.wordList[partOfSpeech]), _c = _b.next(); !_c.done; _c = _b.next()) {
            var word = _c.value;
            if (categories.length === 0 || word.categories.some(function(cat) {
              return selectedCategoried.has(cat);
            })) {
              selectedWords.push(word.word);
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        return selectedWords;
      }
      exports.getWordsByCategory = getWordsByCategory;
    }
  });

  // node_modules/.pnpm/random-word-slugs@0.1.7/node_modules/random-word-slugs/dist/index.js
  var require_dist = __commonJS({
    "node_modules/.pnpm/random-word-slugs@0.1.7/node_modules/random-word-slugs/dist/index.js"(exports) {
      "use strict";
      var __assign = exports && exports.__assign || function() {
        __assign = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
          }
          return t;
        };
        return __assign.apply(this, arguments);
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.totalUniqueSlugs = exports.generateSlug = void 0;
      var words_1 = require_words();
      var DEFAULT_NUMBER_OF_WORDS = 3;
      function generateSlug2(numberOfWords, options) {
        var numWords = numberOfWords || DEFAULT_NUMBER_OF_WORDS;
        var defaultOptions = {
          partsOfSpeech: getDefaultPartsOfSpeech(numWords),
          categories: {},
          format: "kebab"
        };
        var opts = __assign(__assign({}, defaultOptions), options);
        var words = [];
        for (var i = 0; i < numWords; i++) {
          var partOfSpeech = opts.partsOfSpeech[i];
          var candidates = words_1.getWordsByCategory(opts.partsOfSpeech[i], opts.categories[partOfSpeech]);
          var rand = candidates[Math.floor(Math.random() * candidates.length)];
          words.push(rand);
        }
        return formatter(words, opts.format);
      }
      exports.generateSlug = generateSlug2;
      function getDefaultPartsOfSpeech(length) {
        var partsOfSpeech = [];
        for (var i = 0; i < length - 1; i++) {
          partsOfSpeech.push("adjective");
        }
        partsOfSpeech.push("noun");
        return partsOfSpeech;
      }
      function formatter(arr, format) {
        if (format === "kebab") {
          return arr.join("-").toLowerCase();
        }
        if (format === "camel") {
          return arr.map(function(el, i) {
            if (i === 0)
              return el.toLowerCase();
            return el[0].toUpperCase() + el.slice(1).toLowerCase();
          }).join("");
        }
        if (format === "lower") {
          return arr.join(" ").toLowerCase();
        }
        if (format === "sentence") {
          return arr.map(function(el, i) {
            if (i === 0) {
              return el[0].toUpperCase() + el.slice(1).toLowerCase();
            }
            return el;
          }).join(" ");
        }
        return arr.map(function(el) {
          return el[0].toUpperCase() + el.slice(1).toLowerCase();
        }).join(" ");
      }
      function totalUniqueSlugs(numberOfWords, options) {
        var _a, _b;
        var numAdjectives = words_1.getWordsByCategory("adjective", (_a = options === null || options === void 0 ? void 0 : options.categories) === null || _a === void 0 ? void 0 : _a.adjective).length;
        var numNouns = words_1.getWordsByCategory("noun", (_b = options === null || options === void 0 ? void 0 : options.categories) === null || _b === void 0 ? void 0 : _b.noun).length;
        var nums = {
          adjective: numAdjectives,
          noun: numNouns
        };
        var numWords = numberOfWords || DEFAULT_NUMBER_OF_WORDS;
        var partsOfSpeech = (options === null || options === void 0 ? void 0 : options.partsOfSpeech) || getDefaultPartsOfSpeech(numWords);
        var combos = 1;
        for (var i = 0; i < numWords; i++) {
          combos *= nums[partsOfSpeech[i]];
        }
        return combos;
      }
      exports.totalUniqueSlugs = totalUniqueSlugs;
    }
  });

  // src/slug.ts
  var import_random_word_slugs = __toESM(require_dist());
  function generateRandomSlugs(count) {
    const slugs2 = [];
    for (let i = 0; i < count; i++) {
      slugs2.push((0, import_random_word_slugs.generateSlug)());
    }
    return slugs2;
  }
  var slugs = generateRandomSlugs(10);
  console.log(slugs);
})();
