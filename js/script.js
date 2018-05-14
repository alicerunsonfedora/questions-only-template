"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
  //Changelog Dialog
  "Changelog": {
    "Title": "<i class = 'material-icons' style = 'font-size: 32px;'>new_releases</i>&nbsp;What's New",
    "Subtitle": "The 'Material' Update",
    "Message": "<blockquote><ul><li><b>New user interface!</b> Play with a brand-new Material Design-inspired UI that feels sleek and modern!</li><li><b>New content!</b> More of the story has been added for your benefit.</li></ul></blockquote><p>More details can be found on <a target= '_blank' href = 'http://journal.marquiskurt.net/2018/04/whats-coming-to-behind-closed-doors-2.0/'>this blog post</a>.</p>"
  },

  //'Error' Messages
  "ErrorFailure": {
    "Title": "Error",
    "Subtitle": "<code>(0x005045524d5f44454e59)</code> Permission denied",
    "Message": "The administrator has not given you access to this scene or route. The system will automatically present a new scene for you within your jurisdiction of gameplay."
  },
  "ErrorPlayerDeleted": {
    "Title": "Fatal error",
    "Subtitle": "<code>(0x004d495353494e474e4f)</code> Player file missing",
    "Message": "<p>The file <code>player.js</code> is missing. This is a crucial file that lets you play the game; the game cannot continue from this position.</p><p>The web page will reload for your convenience.</p>"
  },
  "ErrorAliceAngelMissing": {
    "Title": "Fatal error",
    "Subtitle": "<code>(0x004d495353494e474e4f)</code> Important file missing",
    "Message": "<p>The file <code>aliceangel.js</code> is missing. This a crucial file that lets you view this scene.</p><p>The game will skip to the next available scene for you.</p>"
  },

  //Success Message
  "Success": {
    "Title": "Well done!",
    "Subtitle": "From the developers",
    "Message": "<p>Congratulations on finishing the game! We spent a lot of effort into making this game as successful as it is.</p><p>This game was designed as a tool to learn more about the Catholic teachings of redemption without flatly referencing the Catechism. Each character had their own roadblock that prevented them from being redeemed. Tachanka held onto bitter feelings. Verdandi let her own suffering act as a stop sign and her lack of time to prevent her from letting herself get redeemed. Delilah had her own issues with self-doubt and insanity, which cuased her to mess up in a big way and not seek redemption. Luckily, you chose the right paths for them. You showed them that there is hope and that there is a way to be redeemed, even if they are not in the Catholic faith.</p><p>Thank you for playing <i>Behind Closed Doors</i>!</p>"
  },

  //In-game messages
  "DelilahFirst": {
    "Title": "",
    "Subtitle": "<b>&nbsp;Want to grab breakfast?</b>",
    "Message": "<div class='chip'><img src='img/characters/delilah/profile.png' alt='Contact Person' style='max-height: 100%;''>Delilah</div><div class = 'container'><p>Hey,</p><p>It feels like a beautiful morning today! I'd love it if we could spend the morning with breakfast together before school starts. It's on me this time, ahaha~!</p></div>"
  },

  "VerdandiSecond": {
    "Title": "",
    "Subtitle": "<b>&nbsp;You may want to get here</b>",
    "Message": "<div class='chip'><img src='img/characters/verdandi/profile.png' alt='Contact Person' style='max-height: 100%;''>Verdandi</div><div class = 'container'><p>Hey,</p><p>You may want to get here soon. It looks like something big is going on. I don't know what it is, though... Just come ASAP.</p></div>"
  }
};

// Define the notifications used in the game
let notifications = {
  "VerdandiSuccess1": {
    title: "End the Suffering (5GP)",
    body: "Congrats, you just helped her get to redemption!",
    icon: ""
  },
  "VerdandiSuccess2": {
    title: "Time is Free (5GP)",
    body: "Congrats, you just helped her get to redemption!",
    icon: ""
  },
  "TachankaSuccess": {
    title: "Adding Sugar to Bitter Tastes (5GP)",
    body: "Congrats, you just helped him get to redemption!",
    icon: ""
  },
  "DelilahSuccess1": {
    title: "Being her Clarity (5GP)",
    body: "Congrats, you just helped her get to redemption!",
    icon: ""
  },
  "DelilahSuccess2": {
    title: "Stopping Doubting Thomas (5GP)",
    body: "Congrats, you just helped her get to redemption!",
    icon: ""
  },
};

// Define the Particles JS Configurations used in the game
let particles = {
  "Coda": {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    }
};

// Define the music used in the game.
const music = {

};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {
  "verdandiwhat": "/characters/verdandi/old/VERDANDIWHAT.png",
  "tachanka_dab": "ui/tachanka_dab.png"
};

// Define the backgrounds for each scene.
const scenes = {
  // Interfaces
  "init": "init.jpg",
  "title": "bg.jpg",

  // Introduction
  "room_early_morning": "room_dawn_light_off.jpg",
  "room_morning": "room_morning_light_off.jpg",
  "park": "beautiful_park_with_nice_volumetric_fog_to_immitate_that_bg_found_in_touma_a_panchu_a_girls_anime.jpg",
  "park2": "pampublikong_kubeta.jpg",

  // Chapter Two
  "campus": "campus.jpg",

  // Chapter Two (Special Route 'Monika')
  "hallway2": "uncle_mugen_school_corridor_morning.jpg",
  "classroom2": "school_science_lab_day03.jpg",
  "classroom2e": "ch2_error.png",

  // Chapter Three
  "classroom": "classroom.jpg",
  "hallway": "classroom_hallway.jpg",

  // Chapter Four
  "rooftop": "rooftop.jpg",

  //Chapter Five + Six
  "field": "day02.jpg",

  // Chapter Seven + End
  "nightclass": "heydelilah.jpg",
  "sunsetbeach": "finalroute.jpg",

  // Failure
  "justdelilah": "justdelilah.jpg"
};

// Define the Characters
const characters = {
  "d": {
    "Name": "Delilah",
    "Color": "#9b59b6",
    "Directory": "delilah",

    "Images": {
      "Happy": "happy.png",
      "Sad": "sad.png",
      "Relaxed": "relaxed.png",
      "Libitina": "third_eye.png",
      "Upset": "upset.png",
      "PlayfulNervous": "nervous.png",
      "Nervous": "seriously_nervous.png",
      "Glitched": "play_with_me.png",
      "Tears": "tearing.png",
      "Cry": "cry.png",
      "Bawl": "bawling.png",
      "SlightEmbarassed": "oh_shit.png",
      "Embarassed": "oh_fuck.png",
      "Monika": "wtf_monika.png"
    }
  },

  "v": {
    "Name": "Verdandi",
    "Color": "#48dbfb",
    "Directory": "verdandi",

    "Images": {
      "Normal": "Verdandi2Normal.png",
      "Happy": "Verdandi2Happy.png",
      "Surprised": "Verdandi2SUPERANGRYBLUSH.png",
      "Flustered": "VerdandiAngry.png",
      "Embarassed": "Verdandi2Embarassed.png",
      "Unamused": "VerdandiAngryTriggered.png",
      "Sad": "VerdandiSad.png",
      "Sigh": "VerdandiSigh.png",
      "@FuckingMonikamm": "VerdandiWhat.png",
      "Glitched": "HohohohmanIsavedthisforlast.png",
      "Crying": "VerdandiCry.png",
      "Joyful": "VerdandiBlush.png"
    }
  },

  "t": {
    "Name": "Tachanka",
    "Color": "#2ecc71",
    "Directory": "tachanka",
    "Images": {
      "Normal": "normal.png",
      "Angry": "angry.png",
      "Troubled": "troubled.png",
      "Happy": "happy.png",
      "Facade": "fauxsmile.png",
      "Glitched": "TACHANKAPLAYWITHME.png"
    }
  },


  "a": {
    "Name": "Susan",
    "Color": "#f39c12",
    "Directory": "adelais",
    "Images": {
      "Happy": "5_grin.png",
      "Angry": "3_angry.png",
      "Sad": "4_sad.png",
      "Embarassed": "2_blush.png"
    }
  },

  "ag": {
    "Name": "◜◧▱◰◔",
    "Color": "#f39c12",
    "Directory": "adelais",
    "Images": {
      //"Glitched1": "g1.png",
      //"Glitched2": "g2.png",
      //"Glitched3": "g3.png",
      //"Glitched4": "g4.png",
      "Missing": "missing.gif",
      "Error": "rendererror.gif"
    }
  },

  //Characters without Respective Images

  "tv": {
    "Name": "Delilah + Tachanka",
    "Color": "#2ecc75"
  },

  "p": {
    "Name": "{{player.Name}}",
    "Color": "#5f27cd"
  },

  "mserve": {
    "Name": "<i class = 'material-icons'>email</i>&nbsp;Messages",
    "Color": "#b71c1c"
  }
};

let script = {
  // The game starts here.
  "Start": [
    "scene park with fadeIn",
    "show d Happy with bounceInUp",
    "I arrive to the park, meeting Delilah at the other end of the brick road.",
    "d Hiya, {{player.Name}}!",
    "d I'm glad we could do this together!",
    "p I'm glad we could, too.",
    "She smiles radiantly.",
    "d See, I have the food in here...",
    "She lifts up a basket of food.",
    "p Let's take the bench on the side.",
    "p It'd be quicker for us to move.",
    "d Sure, that works.",
    "We take a seat on the bench.",
    "end"
  ]
};
