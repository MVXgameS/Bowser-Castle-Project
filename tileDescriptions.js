function createTileMap(coords, description) {
    return coords.reduce((acc, coord) => {
      acc[coord] = description;
      return acc;
    }, {});
  }
  
  const tileDescriptionsByGFX = {
    "Fire Hazards 3": {
      //Burner Flame
      ...createTileMap(
        ["0_0", "0_32", "0_64", "32_0", "32_32", "32_64"],
        {
          usage: "Burner Flame Frame 1/6 (Note: Frame 2 is the exact same graphic as Frame 1, just flipped on the x-axis)",
          palette: "Palette A",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["64_0", "64_32", "64_64", "96_0", "96_32", "96_64"],
        {
          usage: "Burner Flame Frame 2/6 (Note: Frame 2 is the exact same graphic as Frame 1, just flipped on the x-axis)",
          palette: "Palette A",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["128_0", "128_32", "128_64", "128_96", "128_128", "160_0", "160_32", "160_64", "160_96", "160_128"],
        {
          usage: "Burner Flame Frame 3/6 (Note: Frame 4 is the exact same graphic as Frame 3, just flipped on the x-axis)",
          palette: "Palette A",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["192_0", "192_32", "192_64", "192_96", "192_128", "224_0", "224_32", "224_64", "224_96", "224_128"],
        {
          usage: "Burner Flame Frame 4/6 (Note: Frame 4 is the exact same graphic as Frame 3, just flipped on the x-axis)",
          palette: "Palette A",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["256_0", "256_32", "256_64", "256_96", "256_128", "256_160", "288_0", "288_32", "288_64", "288_96", "288_128", "288_160"],
        {
          usage: "Burner Flame Frame 5/6",
          palette: "Palette A",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["320_0", "320_32", "320_64", "320_96", "320_128", "320_160", "352_0", "352_32", "352_64", "352_96", "352_128", "352_160"],
        {
          usage: "Burner Flame Frame 6/6",
          palette: "Palette A",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      //Burner Base
      ...createTileMap(
        ["384_0", "384_32", "416_0", "416_32"],
        {
          usage: "Burner Base",
          palette: "Palette 2",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
    },
    "Fire Hazards 2": {
      //Blargg
      ...createTileMap(
        ["0_0", "0_32", "0_64", "0_96", "32_0", "32_32", "32_64", "32_96", 
          "64_0", "64_32", "64_64", "64_96", "96_0", "96_32", "96_64", "96_96",
          "128_0", "128_32", "128_64", "128_96", "160_0", "160_32", "160_64", "160_96",
        ],
        {
          usage: "Graphic for the Blargg Frame 1/2",
          palette: "Palette A",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["192_0", "192_32", "192_64", "192_96", "224_0", "224_32", "224_64", "224_96", 
          "256_0", "256_32", "256_64", "256_96", "288_0", "288_32", "288_64", "288_96",
          "320_0", "320_32", "320_64", "320_96", "352_0", "352_32", "352_64", "352_96",
        ],
        {
          usage: "Graphic for the Blargg Frame 2/2",
          palette: "Palette A",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      //Firebar Base
      ...createTileMap(
        ["384_0", "384_32", "416_0", "416_32"],
        {
          usage: "Firebar Base",
          palette: "Palette 2",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      //Firebar Flame
      ...createTileMap(
        ["448_0", "480_0"],
        {
          usage: "Firebar Flame Frame 1/3",
          palette: "Palette A",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["448_32", "480_32"],
        {
          usage: "Firebar Flame Frame 2/3",
          palette: "Palette A",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["448_64", "480_64"],
        {
          usage: "Firebar Flame Frame 3/3",
          palette: "Palette A",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      //Small Sparky
      ...createTileMap(
        ["0_128", "0_160", "32_128", "32_160"],
        {
          usage: "Used for the Small Sparky Frame 1/2",
          palette: "Palette A",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["64_128", "64_160", "96_128", "96_160"],
        {
          usage: "Used for the Small Sparky Frame 2/2",
          palette: "Palette A",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      //Podoboo
      ...createTileMap(
        ["0_192", "0_224", "32_192", "32_224"],
        {
          usage: "Used for the Podoboo Frame 1/2",
          palette: "Palette A",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["64_192", "64_224", "96_192", "96_224"],
        {
          usage: "Used for the Podoboo Frame 2/2",
          palette: "Palette A",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      //Bowser Statue Flame
      ...createTileMap(
        ["128_128", "160_128"],
        {
          usage: "Used for the flames spit out by Bowser's statues Frame 1/2",
          palette: "Palette C",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["192_128", "224_128"],
        {
          usage: "Used for the flames spit out by Bowser's statues Frame 2/2",
          palette: "Palette C",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      //Lava Splashes
      ...createTileMap(
        ["128_160"],
        {
          usage: "Used for the trail of the Podoboo and the splash for the Blargg Frame 1/4",
          palette: "Palette A",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["160_160"],
        {
          usage: "Used for the trail of the Podoboo and the splash for the Blargg Frame 2/4",
          palette: "Palette A",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["192_160"],
        {
          usage: "Used for the trail of the Podoboo and the splash for the Blargg Frame 3/4",
          palette: "Palette A",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["224_160"],
        {
          usage: "Used for the trail of the Podoboo and the splash for the Blargg Frame 4/4",
          palette: "Palette A",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
    },
    "Fire Hazards 1": {
    //Big Sparky
      ...createTileMap(
        ["0_0", "0_32", "0_64", "0_96", "32_0", "32_32", "32_64", "32_96", 
          "64_0", "64_32", "64_64", "64_96", "96_0", "96_32", "96_64", "96_96"
        ],
        {
          usage: "Used for the Big Sparky Frame 1/8",
          palette: "Palette A",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["128_0", "128_32", "128_64", "128_96", "160_0", "160_32", "160_64", "160_96", 
          "192_0", "192_32", "192_64", "192_96", "224_0", "224_32", "224_64", "224_96"
        ],
        {
          usage: "Used for the Big Sparky Frame 2/8",
          palette: "Palette A",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["256_0", "256_32", "256_64", "256_96", "288_0", "288_32", "288_64", "288_96", 
          "320_0", "320_32", "320_64", "320_96", "352_0", "352_32", "352_64", "352_96"
        ],
        {
          usage: "Used for the Big Sparky Frame 3/8",
          palette: "Palette A",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["384_0", "384_32", "384_64", "384_96", "416_0", "416_32", "416_64", "416_96", 
          "448_0", "448_32", "448_64", "448_96", "480_0", "480_32", "480_64", "480_96"
        ],
        {
          usage: "Used for the Big Sparky Frame 4/8",
          palette: "Palette A",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["0_128", "0_160", "0_192", "0_224", "32_128", "32_160", "32_192", "32_224", 
          "64_128", "64_160", "64_192", "64_224", "96_128", "96_160", "96_192", "96_224"
        ],
        {
          usage: "Used for the Big Sparky Frame 5/8",
          palette: "Palette A",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["128_128", "128_160", "128_192", "128_224", "160_128", "160_160", "160_192", "160_224", 
          "192_128", "192_160", "192_192", "192_224", "224_128", "224_160", "224_192", "224_224"
        ],
        {
          usage: "Used for the Big Sparky Frame 6/8",
          palette: "Palette A",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["256_128", "256_160", "256_192", "256_224", "288_128", "288_160", "288_192", "288_224", 
          "320_128", "320_160", "320_192", "320_224", "352_128", "352_160", "352_192", "352_224"
        ],
        {
          usage: "Used for the Big Sparky Frame 7/8",
          palette: "Palette A",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["384_128", "384_160", "384_192", "384_224", "416_128", "416_160", "416_192", "416_224", 
          "448_128", "448_160", "448_192", "448_224", "480_128", "480_160", "480_192", "480_224"
        ],
        {
          usage: "Used for the Big Sparky Frame 8/8",
          palette: "Palette A",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
    },
    "Enemies 2": {
    // Parachuting Bom-omb
      ...createTileMap(
        ["0_0", "0_32", "0_64", "0_96", "32_0", "32_32", "32_64", "32_96", "64_0", "64_32", "64_64", "64_96"],
        {
          usage: "Parachuting Bom-omb Frame 1/5",
          palette: "Palette B",
          type: "Castle",
          mode: "4BPP SNES"
        } 
      ),
      ...createTileMap(
        ["96_0", "96_32", "96_64", "96_96", "128_0", "128_32", "128_64", "128_96", "160_0", "160_32", "160_64", "160_96"],
        {
          usage: "Parachuting Bom-omb Frame 2/5",
          palette: "Palette B",
          type: "Castle",
          mode: "4BPP SNES"
        } 
      ),
      ...createTileMap(
        ["192_0", "192_32", "192_64", "192_96", "224_0", "224_32", "224_64", "224_96"],
        {
          usage: "Parachuting Bom-omb Frame 3/5",
          palette: "Palette B",
          type: "Castle",
          mode: "4BPP SNES"
        } 
      ),
      ...createTileMap(
        ["256_0", "256_32", "256_64", "256_96", "288_0", "288_32", "288_64", "288_96", "320_0", "320_32", "320_64", "320_96"],
        {
          usage: "Parachuting Bom-omb Frame 4/5",
          palette: "Palette B",
          type: "Castle",
          mode: "4BPP SNES"
        } 
      ),
      ...createTileMap(
        ["352_0", "352_32", "352_64", "352_96", "384_0", "384_32", "384_64", "384_96", "416_0", "416_32", "416_64", "416_96"],
        {
          usage: "Parachuting Bom-omb Frame 5/5",
          palette: "Palette B",
          type: "Castle",
          mode: "4BPP SNES"
        } 
      ),
    //Bom-omb Walking
      ...createTileMap(
        ["0_128", "0_160", "32_128", "32_160"],
        {
          usage: "Bom-omb Walking Frame 1/2",
          palette: "Palette B",
          type: "Castle",
          mode: "4BPP SNES"
        } 
      ),
      ...createTileMap(
        ["64_128", "64_160", "96_128", "96_160"],
        {
          usage: "Bom-omb Walking Frame 2/2",
          palette: "Palette B",
          type: "Castle",
          mode: "4BPP SNES"
        } 
      ),
      //Explosion Stars
      ...createTileMap(
        ["128_128"],
        {
          usage: "Stars used in the Bom-omb Explosion",
          palette: "Palette 8/Palette 9/Palette B",
          type: "Castle",
          mode: "4BPP SNES"
        } 
      ),
    },
    "Enemies 1": {
    //Koopa Shell
      ...createTileMap(
        ["0_0", "0_32", "32_0", "32_32"],
        {
          usage: "Koopa Shell Frame 1/4",
          palette: "Palette A/Palette B/Palette C/Palette D",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["64_0", "64_32", "96_0", "96_32"],
        {
          usage: "Koopa Shell Frame 2/4",
          palette: "Palette A/Palette B/Palette C/Palette D",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["128_0", "128_32", "160_0", "160_32"],
        {
          usage: "Koopa Shell Frame 3/4",
          palette: "Palette A/Palette B/Palette C/Palette D",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["192_0", "192_32", "224_0", "224_32"],
        {
          usage: "Koopa Shell Frame 4/4",
          palette: "Palette A/Palette B/Palette C/Palette D",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      //Koopa Death
      ...createTileMap(
        ["256_0", "288_0"],
        {
          usage: "Stomped on Koopa",
          palette: "Palette A/Palette B/Palette C/Palette D",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      //Koopa Turning
      ...createTileMap(
        ["320_0", "320_32", "320_64", "320_96", "352_0", "352_32", "352_64", "352_96"],
        {
          usage: "Graphic used for when the Koopa bumps a wall and turns around to walk in the other direction",
          palette: "Palette A/Palette B/Palette C/Palette D",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      //Koopa Walking Animation (With Shell)
      ...createTileMap(
        ["384_0", "384_32", "384_64", "384_96", "416_0", "416_32", "416_64", "416_96"],
        {
          usage: "Koopa Walking Frame 1/2",
          palette: "Palette A/Palette B/Palette C/Palette D",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["448_0", "448_32", "448_64", "448_96", "480_0", "480_32", "480_64", "480_96"],
        {
          usage: "Koopa Walking Frame 2/2",
          palette: "Palette A/Palette B/Palette C/Palette D",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      //Koopa Walking (Without Shell)
      ...createTileMap(
        ["384_128", "384_160", "416_128", "416_160"],
        {
          usage: "Crouched Koopa Walking Frame 1/2",
          palette: "Palette A/Palette B/Palette C/Palette D",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["448_128", "448_160", "480_128", "480_160"],
        {
          usage: "Crouched Koopa Walking Frame 2/2",
          palette: "Palette A/Palette B/Palette C/Palette D",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      //Koopa Climbing
      ...createTileMap(
        ["0_128", "0_160", "0_192", "0_224", "32_128", "32_160", "32_192", "32_224"],
        {
          usage: "Back facing climbing Koopa Frame 1/2 (Note: only difference between Frame 1 and 2, is a flip on the x-axis of the graphic)",
          palette: "Palette A/Palette B/Palette C/Palette D",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["64_128", "64_160", "64_192", "64_224", "96_128", "96_160", "96_192", "96_224"],
        {
          usage: "Back facing climbing Koopa Frame 2/2 (Note: only difference between Frame 1 and 2, is a flip on the x-axis of the graphic)",
          palette: "Palette A/Palette B/Palette C/Palette D",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["128_128", "128_160", "128_192", "128_224", "160_128", "160_160", "160_192", "160_224"],
        {
          usage: "Front facing climbing Koopa Frame 1/2 (Note: only difference between Frame 1 and 2, is a flip on the x-axis of the graphic)",
          palette: "Palette A/Palette B/Palette C/Palette D",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["192_128", "192_160", "192_192", "192_224", "224_128", "224_160", "224_192", "224_224"],
        {
          usage: "Front facing climbing Koopa Frame 2/2 (Note: only difference between Frame 1 and 2, is a flip on the x-axis of the graphic)",
          palette: "Palette A/Palette B/Palette C/Palette D",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["256_128", "256_160", "256_192", "256_224", "288_128", "288_160", "288_192", "288_224"],
        {
          usage: "Turning graphic used for the Koopa Climbing sprite",
          palette: "Palette A/Palette B/Palette C/Palette D",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      //Spiny Walking
      ...createTileMap(
        ["0_64", "0_96", "32_64", "32_96"],
        {
          usage: "Crouched Koopa Walking Frame 1/2",
          palette: "Palette C",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
      ...createTileMap(
        ["64_64", "64_96", "96_64", "96_96"],
        {
          usage: "Crouched Koopa Walking Frame 2/2",
          palette: "Palette C",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
    },
    "Castle Foreground": {
    // Ground Tiles
        ...createTileMap(
        ["0_0", "32_0", "64_0", "96_0", "128_0", "160_0", "192_0", "224_0", "256_0", "288_0",
          "0_32", "32_32", "64_32", "96_32", "128_32", "160_32", "192_32", "224_32", "256_32", "288_32",
          "0_64", "32_64", "64_64", "96_64", "128_64", "160_64", "192_64", "224_64", "256_64", "288_64",
          "0_96", "32_96", "64_96", "96_96", "128_96", "160_96", "192_96", "224_96", "256_96", "288_96",
          "0_128", "32_128", "64_96", "96_128", "128_128", "160_128",
          "0_160", "32_160", "64_160", "96_160", "128_160", "160_160",
        ],
        {
          usage: "Ground Tileset",
          palette: "Palette 2",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
    // Big Blocks
      ...createTileMap(
        [ "320_0", "352_0", "384_0", "416_0", "448_0", "480_0",
          "320_32", "352_32", "384_32", "416_32", "448_32", "480_32",
           "320_64", "352_64", "384_64", "416_64", "448_64", "480_64",
           "320_96", "352_96", "384_96", "416_96", "448_96", "480_96",
           "320_128", "352_128", "384_128", "416_128", "448_128", "480_128",
           "320_160", "352_160", "384_160", "416_160", "448_160", "480_160",
       ],
        {
          usage: "Big Blocks",
          palette: "Palette 2",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
  // Hard Block
      ...createTileMap(
        [ "0_192", "32_192", "0_224", "32_224",],
        {
          usage: "Hard Block",
          palette: "Palette 4",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
  // Spikes
    ...createTileMap(
      [ "192_128", "224_128", "256_128", "288_128", 
        "192_160", "224_160", "256_160", "288_160", 
      ],
        {
          usage: "Spikes",
          palette: "Palette 6",
          type: "Castle",
          mode: "4BPP SNES"
        }
      ),
    }
  };