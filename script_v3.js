
        const prompts = [
           "A dancing robot with a tutu",
    "A hungry dinosaur eating spaghetti",
    "A flying hamburger with wings",
    "A grumpy cat holding an umbrella",
    "A unicorn jumping over a rainbow",
    "A penguin doing a cartwheel",
    "A dancing cactus in a cowboy hat",
    "A dragon flying through a donut",
    "A happy whale with a party hat",
    "A purple octopus wearing sunglasses",
    "A ninja turtle juggling bananas",
    "A snail with a rocket backpack",
    "A kitten painting a picture",
    "A dancing pancake with syrup",
    "A turtle playing a guitar",
    "A moon made of cheese with a smiling face",
    "A crocodile wearing a bow tie",
    "A unicorn eating ice cream",
"A flying watermelon with sunglasses singing a song",
  "A colorful dragon roasting marshmallows with a unicorn",
  "A giggling ghost riding a bicycle in the clouds",
  "A brave knight hugging a dragon under a rainbow",
  "A talking tree wearing a scarf and holding an umbrella",
  "A winking star sitting on top of a giant cupcake",
  "A happy cat catching bubbles in a giant teacup",
  "A tiny elephant, a laughing crab, and a smiling star eating ice cream",
  "A sneaky cupcake, a flying jellybean, and a sleepy snail climbing a mountain",
  "A fluffy penguin, a sparkly robot, and a silly monkey playing video games",
  "A speedy snail, a curious frog, and a brave shark building a rocket",
  "A sleepy bear, a dancing carrot, and a jumping turtle playing hide-and-seek",
  "A sparkly, mischievous unicorn juggling ice cream cones",
  "A sleepy, tiny panda cuddling a watermelon",
  "A wobbly, colorful jellybean riding a unicycle",
  "A grumpy, fuzzy cat balancing a teacup",
  "A shiny, brave robot catching a butterfly",
  "A spiky, purple hedgehog hugging a cupcake",
  "A squeaky, playful duck tossing a beach ball",
  "A round, glowing moon eating a pizza slice",
  "A silly, bouncy frog jumping over a sunflower",
  "A sneaky, green snake hiding behind a treasure chest",              
    "A cloud holding a balloon",
    "A monster in a tutu skipping rope",
    "A robot riding a bicycle",
    "A jellyfish playing soccer",
    "A frog in a hammock with sunglasses",
    "A koala wearing a crown",
    "A mouse flying a kite",
    "A bunny juggling carrots",
    "A rainbow-colored lion with glasses",
    "A giraffe painting a rainbow",
    "A ghost with a big smile",
    "A monkey on a trampoline with balloons",
    "A flamingo with rainbow-colored feathers",
    "A dancing taco with a bow tie",
    "A flying elephant with a parachute",
    "A sleepy bear holding a coffee cup",
    "A bat with a cape and a sword",
    "A jumping frog with a crown",
    "A purple whale swimming through clouds",
    "A giraffe wearing roller skates",
    "A rabbit in a magician’s costume",
    "A cat riding a skateboard in a circus",
    "A smiling snail with a backpack",
    "A giant pizza slice with sunglasses",
    "A penguin riding a scooter with a scarf",
    "A sloth wearing a business suit",
    "A pink dragon blowing bubbles",
    "A dancing shark with a beach ball",
    "A crocodile playing soccer in a tuxedo",
    "A jellyfish with glasses and a bowtie",
    "A happy koala riding a bike",
    "A dinosaur playing basketball with a crown",
    "A sheep with a party hat and balloons",
    "A monkey wearing a chef’s hat",
    "A unicorn playing hopscotch",
    "A superhero cat with a cape and glasses",
    "A flying giraffe with a balloon",
    "A dog eating spaghetti with a spoon",
    "A bunny with rainbow-colored ears",
    "A frog wearing a flower crown",
    "A fish wearing roller skates",
    "A giraffe with a scarf flying a kite",
    "A dragon wearing a chef’s hat",
    "A flamingo surfing on a wave",
    "A robot making cupcakes",
    "A turtle in a superhero costume",
    "A fox playing the violin",
    "A pig wearing a detective hat",
    "A monster with a crown",
    "A dancing penguin in a tuxedo",
        ];

        let history = [];
        let currentIndex = -1;

        const promptBox = document.getElementById('promptBox');
        const promptButton = document.getElementById('promptButton');
        const previousButton = document.getElementById('previousButton');
        const nextButton = document.getElementById('nextButton');

        promptButton.addEventListener('click', () => {
            const newPrompt = prompts[Math.floor(Math.random() * prompts.length)];
            history.push(newPrompt);
            currentIndex = history.length - 1;
            promptBox.textContent = newPrompt;
        });

        previousButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                promptBox.textContent = history[currentIndex];
            }
        });

        nextButton.addEventListener('click', () => {
            if (currentIndex < history.length - 1) {
                currentIndex++;
                promptBox.textContent = history[currentIndex];
            }
        });
