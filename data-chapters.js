window.CHAPTERS = [
  { id:'howto', emoji:'📱', name:'How to Navigate This App', desc:'A quick tour of recipes, planner, shopping list, favorites, and more',
    heroColor:'var(--green)', heroEmoji:'📱', heroTagline:'Everything You Can Do Here',
    content:`
    <div class="ch-prose"><p>Welcome to <em>From Soil to Soul</em>. Here is everything this app can do.</p></div>

    <div class="ch-section-title">The Four Tabs</div>

    <div class="tier-card"><div class="tier-header regen">🏠 Home</div><div class="tier-body">Your starting point. Tap <strong>RECIPES</strong>, <strong>MEAL PLANNER</strong>, or <strong>LEARN</strong> to jump straight in.<br><br><strong>Dinner Tonight</strong> — two quick buttons: <em>🥕 Use What I Have</em> searches all recipes by ingredient as you type. <em>🍽️ What's for Dinner?</em> shows tonight's planned dinner if you have one, or rolls a random suggestion with a 🎲 re-roll.</div></div>

    <div class="tier-card"><div class="tier-header regen">🍽️ Recipes</div><div class="tier-body"><strong>Search bar</strong> — searches the built-in library and <strong>📓 Mine</strong> together as you type. It matches titles, descriptions, ingredient names, instruction steps, notes, and any <em>To serve</em> / large-batch text. Short words must match exactly; longer words allow a single-letter typo.<br><br><strong>Category chips</strong> — ❤️ Favorites · 🌞 June (seasonal) · 🍽️ Weekly Prep · 📓 Mine · then all 10 recipe categories. Tap to filter, tap again to deselect.<br><br><strong>🎲 Dice button</strong> — picks a random recipe. If a category is active, picks only from that category.<br><br>Tap any recipe card to open it. All recipes are shown by default — search or filter to narrow down.</div></div>

    <div class="tier-card"><div class="tier-header regen">📅 Plan</div><div class="tier-body"><strong>Day view</strong> — opens to today automatically. Tap any day to switch. Tap + on any slot to add a recipe from the full library or type a custom meal.<br><br><strong>Lunch shortcuts</strong> — tap 🍱 Leftovers or 🧀 Charcuterie plate for a one-tap quick add.<br><br><strong>Slot notes</strong> — type directly below any meal slot for quick reminders like "double batch."<br><br><strong>Week view</strong> — toggle DAY / WEEK for a full-week overview including your Meal Prep list.<br><br><strong>Meal Prep &amp; Staples</strong> — your weekly batch cook list. Tap <em>+ Add a Recipe</em> to link any recipe — it shows prep time and cook time right on the item, plus a ↗ shortcut to jump to the recipe. Or type any task manually. Check off as you go — a progress bar tracks completion. Tap 📝 to add a private note inline.<br><br>Items are automatically grouped: 🌾 Breads &amp; Baked · ⏳ Start First (broths, ferments, overnight) · 🍲 Soups &amp; Broths · 🫙 Condiments &amp; Sauces · 🍳 Breakfast Batch · 🍎 Snacks &amp; No-Bake.<br><br><strong>Batch Cook Optimizer</strong> — appears when you have 3+ prep items. Shows total hands-on time, flags what to start first, and groups oven recipes by temperature so you can batch bake efficiently.<br><br><strong>Meal Plans</strong> — tap the clipboard 📋 icon. Save your current week as a custom plan (up to 10 saved), or load one of 7 pre-built plans including May Seasonal Week, High Protein Week, Sourdough &amp; Ferments Week, and more.<br><br><strong>🛒 Shopping List</strong> — tap the cart icon. Auto-built from your plan, consolidated by ingredient. Grouped by Produce, Dairy &amp; Eggs, Meat &amp; Fish, Canned &amp; Dry, Pantry, Spices &amp; Seasonings.<br><br><strong>Export</strong> — tap 📤 to save a snapshot of your week as an image to your camera roll.</div></div>

    <div class="tier-card"><div class="tier-header regen">🌱 Learn</div><div class="tier-body">Deep dives on every ingredient and technique — farming practices, grains &amp; milling, fats &amp; oils, dairy, eggs, sweeteners, fermentation, sourdough, seasonal produce, and more. For <strong>packaged food</strong>, there is a full <strong>Ingredients to Avoid glossary</strong> (hundreds of entries, A–Z searchable, with <em>Avoid</em> vs. <em>Use with caution</em> tabs) plus companion reads on flavor labels, packaging claims, fortification, and what those terms really mean — built as a pocket decoder for real shopping. Includes sourcing guides (Azure Standard, Taylor's Favorite Finds), bulk storage setup, and a full conversions &amp; substitutions reference. Tap any card to read.</div></div>

    <div class="ch-section-title">Inside a Recipe</div>
    <div class="ch-prose">
      <p><strong>Serving scaler (1x · 2x · 3x · 4x)</strong> — scales every ingredient instantly including cups, grams, and fractions like ⅛ tsp and 1½ cups.</p>
      <p><strong>Timers ⏱</strong> — tap any timer button to start a countdown. On supported devices, the app will try to keep your screen awake while the timer runs so it won’t go dark while you cook. A haptic pulse + audio chime fires when time is up. Note: the in-app timer does not send a notification if you lock your phone or fully close the app. If you need a background notification, tap the 🕐 button in the timer bar — it shows you the exact time to set so you can open your Clock app and enter it manually.</p>
      <p><strong>❤️ Favorite</strong> — saves to your Favorites chip for instant access.</p>
      <p><strong>+ Add to Meal Plan</strong> — opens the slot picker to add directly to any day and meal slot.</p>
      <p><strong>🖨️ Print Recipe</strong> — clean, ink-friendly print layout. Respects your current serving size and includes personal notes.</p>
      <p><strong>Personal notes</strong> — private notes field at the bottom of every recipe. Saves automatically to your device.</p>
      <p><strong>Linked ingredients</strong> — some ingredients link to a sub-recipe or Learn chapter. Tap the underlined name to jump there.</p>
    </div>

    <div class="ch-section-title">📓 My Recipes</div>
    <div class="ch-prose">
      <p>Add your own recipes. Tap the 📓 Mine chip in Recipes, then tap + Add My Recipe. Saves to your device and appears alongside all other recipes — fully searchable and plan-ready.</p>
    </div>

    <div class="ch-section-title">Tips</div>
    <div class="ch-prose">
      <p><strong>Add to home screen</strong> — in Safari, tap Share → Add to Home Screen. Opens full-screen like a native app and works offline.</p>
      <p><strong>Back Up &amp; Restore</strong> — at the bottom of the <strong>Learn</strong> tab. Tap <em>Back up my data</em> to download a file that contains your favorites, meal plan, shopping list, saved plans, and notes. On a new phone (or after clearing Safari), open Learn → <em>Restore my data</em> and select that file.</p>
      <p><strong>Seasonal chip</strong> — the 🌺 chip updates monthly with peak-season recipes. Check back each month for a fresh rotation.</p>
      <p><strong>Auto-updates</strong> — when a new version is available, the app updates in the background. The next time you open it, you’ll automatically get the latest seasonal recipes and Learn updates (no reinstall needed).</p>
    </div>`
  },
  { id:'introduction', emoji:'📖', name:'Introduction', desc:"Taylor's story — why this book exists and where it all began",
    heroColor:'var(--tan)', heroEmoji:'📖', heroTagline:'From Hot Pockets to Whole Foods',
    content:`
    <div class="ch-prose">
      <p>I grew up on Hot Pockets. Microwave meals. Fast food a few nights a week. The kind of diet that, looking back, was perfectly normal — because for most of us, that was just life. My parents were doing everything right by the standards of the time. We followed the food pyramid, bought the low-fat everything, and trusted the labels.</p>
      <p>But my body told a different story. I had asthma, allergies, and eczema that never really went away. I got pneumonia, bronchitis, strep throat, and tonsillitis — not once, but year after year. I used an inhaler when I laughed too hard. Depression and anxiety crept in early. And through all of it, the answer was always the same: another prescription, another medication, another band-aid over a wound that nobody was looking at closely enough.</p>
    </div>
    <div class="callout"><div class="callout-text">That started to change when I got pregnant with my oldest daughter at 17. Suddenly everything felt different. I didn't want to just survive. I wanted to thrive — and more than that, I wanted her to thrive. That small, fierce desire cracked something open in me, and I started asking questions I'd never thought to ask before.</div></div>
    <div class="ch-prose">
      <p>Over the last nearly eleven years I've gone deep. I've read the research, questioned the recommendations, and slowly, intentionally rebuilt the way my family eats and lives. The results have been undeniable.</p>
      <p>I no longer use my inhaler. I rarely get sick. My health has done a complete 180 — and it started with food. Not a diet. Not a cleanse. Not a set of rules. Just real food, grown the right way, prepared with intention.</p>
      <p><em>From Soil to Soul</em> is the guide I wish I had when I started. It's not just a cookbook — it's a deep dive into the why behind the what. Knowing that freshly milled einkorn flour is better for you is one thing. Understanding why — what happens to grain when it's processed, what nutrients are lost — is what makes the change stick.</p>
    </div>
    <div class="callout"><div class="callout-text">I am not a doctor. I am not a nutritionist. I am a mama to three girls, a forever learner, and someone who has spent over a decade obsessively researching what it means to truly nourish a body. Progress is always more powerful than perfection.</div></div>
    <div class="ch-prose"><p>Start where you are. Do what you can. Trust the process.<br><br><strong>— Taylor</strong><br><em>mama · wife · bougie hippie · your whole body wellness bestie</em><br>swapsmadesimple.com</p></div>
    `
  },
  { id:'wholefoods', emoji:'🥗', name:'Build Your Whole Foods Plate', desc:'Why the food pyramid failed us and what the body actually needs',
    heroColor:'#c8d4b4', heroEmoji:'🥗', heroTagline:'A Framework Grounded in Biology, Not Lobbying',
    content:`
    <div class="ch-prose">
      <p>For the better part of a century, Americans have been told what to eat by a food pyramid designed by the USDA — the same agency responsible for promoting American agricultural products. A 2016 investigation in JAMA Internal Medicine found that the Sugar Research Foundation paid scientists in the 1960s to publish research that downplayed sugar's role in heart disease and emphasized fat as the culprit. Those scientists did not disclose their funding. The research shaped dietary guidelines for decades.</p>
    </div>
    <div class="callout"><div class="callout-text">The science has always been there. What changed was not the science — it was who funded it and what they needed it to say.</div></div>
    <div class="ch-section-title">What Your Body Actually Needs</div>
    <div class="tier-card"><div class="tier-header regen">Protein — The Structural Foundation</div><div class="tier-body">Protein is not a trend. It is the literal building material of the body — required for every cell, enzyme, hormone, and antibody. The RDA of 0.8g per kg body weight is the minimum to prevent deficiency, not the optimal amount for health. Current research suggests 1.2–1.6g per kg for active adults. Animal proteins — meat, eggs, fish, dairy — provide complete amino acid profiles with high bioavailability. Adequate, quality protein at every meal is one of the most impactful nutritional decisions you can make.</div></div>
    <div class="tier-card"><div class="tier-header regen">Dietary Fat — Essential, Not Optional</div><div class="tier-body">Eating fat does not make you fat. The body stores fat primarily in response to insulin — released in response to carbohydrate intake. Fat-soluble vitamins A, D, E, and K cannot be absorbed without fat present. Every cell membrane is made primarily of fat. The brain is ~60% fat. A 2010 meta-analysis of 21 studies involving nearly 350,000 subjects found no significant association between saturated fat intake and cardiovascular disease. The problematic fat in the modern diet is industrial seed oils — not butter.</div></div>
    <div class="tier-card"><div class="tier-header org">Quality Carbohydrates</div><div class="tier-body">The problem is not carbohydrates — it is refined, fiber-stripped carbohydrates. Whole food carbohydrates come packaged with fiber that slows glucose absorption and feeds beneficial gut bacteria. The glycemic response is profoundly modified by context — the same food eaten with fat and protein produces a dramatically different blood sugar response than eaten alone. Freshly milled whole grains, sweet potatoes, legumes, squash, and in-season fruit are the carbohydrates this book is built around.</div></div>
    <div class="tier-card"><div class="tier-header regen">Micronutrients & Mineral Density</div><div class="tier-body">Magnesium is involved in over 300 enzymatic processes — an estimated 48% of Americans don't meet the daily requirement. Iron content in vegetables has declined ~30% since 1940. Vitamin K2 — which directs calcium to bones rather than arteries — is nearly absent from the conventional diet. The richest sources are fermented foods, grass-fed animal fats, and aged cheeses. The whole foods framework naturally addresses micronutrient needs through dietary variety and food quality.</div></div>
    <div class="tier-card"><div class="tier-header regen">Gut Health as the Foundation</div><div class="tier-body">The gut microbiome regulates immune function, produces neurotransmitters, synthesizes vitamins, metabolizes hormones, and maintains the gut barrier. A disrupted microbiome is associated with inflammatory bowel disease, autoimmune conditions, obesity, type 2 diabetes, depression, and anxiety. Rebuilding it requires two things the Whole Foods Plate provides: prebiotic fiber (from vegetables, legumes, and whole grains) and probiotic foods (fermented foods). This is why fermented foods appear throughout this book — not as optional additions, but as a functional component of a complete diet.</div></div>
    <div class="tier-card"><div class="tier-header org">Fiber — The Overlooked Essential</div><div class="tier-body">Fiber is not just roughage — it is the substrate that feeds your gut microbiome, slows glucose absorption, supports bile excretion, and keeps the digestive tract moving. Most Americans consume half the recommended daily amount. The solution is not a supplement: it is eating real food. Vegetables, legumes, whole intact grains, and fruit provide fiber in the form your body knows how to use — bound to water, minerals, and phytonutrients that work together. Freshly milled whole grains like einkorn retain all three parts of the grain — bran, germ, and endosperm — delivering fiber that refined flour has had completely stripped away. Aim for variety: soluble fiber from oats and legumes feeds different bacterial strains than insoluble fiber from leafy greens and whole grains. Both matter.</div></div>
    <div class="callout"><div class="callout-text">The single most impactful nutritional change most families can make: replace ultra-processed food with whole food. Everything else builds from there.</div></div>
    `
  },
  { id:'pantry', emoji:'🏪', name:'Pantry & Kitchen Setup', desc:'Everything you need to cook every recipe — built gradually, sustainably',
    heroColor:'#d8d0c0', heroEmoji:'🏪', heroTagline:'Build It Over Time — Not All at Once',
    content:`
    <div class="ch-prose"><p>This chapter is the bridge between the education and the cooking — a practical, opinionated guide to building a whole foods pantry from the ground up.</p></div>
    <div class="callout"><div class="callout-text">You do not need to do this all at once. Building a whole foods pantry is a practice, not an event. Start with the essentials, add as you can, and remember that the most transformative step is always the first one.</div></div>
    <div class="ch-section-title">The Replacement Method</div>
    <div class="ch-prose"><p>The most sustainable approach: when something runs out, replace it with the better version. You are not wasting food. You are not spending double. You are simply upgrading one item at a time as your natural consumption creates the opportunity.</p>
    <p>Canola oil runs out → replace with avocado oil or ghee &nbsp;·&nbsp; White flour runs out → freshly milled einkorn &nbsp;·&nbsp; Refined sugar runs out → coconut sugar or panela &nbsp;·&nbsp; Store-bought dressing → make the Apple Cider Vinaigrette &nbsp;·&nbsp; Commercial yogurt runs out → make a batch of homemade yogurt</p></div>
    <div class="ch-section-title">Priority Order</div>
    <div class="tier-card"><div class="tier-header regen">Week 1–2: Cooking Oils — Highest Impact</div><div class="tier-body">Swap cooking oils first. Avocado oil and grass-fed butter replace everything else. This single change removes seed oils from the majority of your daily cooking immediately. Chosen Foods or Primal Kitchen avocado oil. Kerrygold butter. Fourth & Heart ghee — or make your own.</div></div>
    <div class="tier-card"><div class="tier-header regen">Week 3–4: Sweeteners</div><div class="tier-body">Coconut sugar, panela/rapadura, and pure Grade A Dark maple syrup replace white sugar. Raw local honey replaces processed honey. These are 1:1 swaps in most recipes — zero learning curve, immediate upgrade.</div></div>
    <div class="tier-card"><div class="tier-header org">Month 2: Flour</div><div class="tier-body">Freshly milled einkorn or whole grain einkorn flour replaces all-purpose. If not yet milling, Jovial Foods sells organic whole grain einkorn flour. Start with one recipe — sandwich bread or pancakes — and taste the difference. You will not go back.</div></div>
    <div class="tier-card"><div class="tier-header org">Month 2–3: Broths & Pantry Staples</div><div class="tier-body">Bone broth replaces conventional chicken broth. Quality canned San Marzano tomatoes. Organic canned beans. Upgrade animal products as budget allows: eggs first, then dairy, then meat.</div></div>
    <div class="ch-section-title">Budget Tips</div>
    <div class="ch-prose">
      <p><strong>Where to spend:</strong> Animal products first — quality matters most here nutritionally. Cooking fats — you use these daily and they go into everything. Grains — organic grain berries in bulk are affordable and keep for years.</p>
      <p><strong>Where to save:</strong> Frozen organic produce — often half the price of fresh organic and equally nutritious. Bulk buying through Azure Standard or Thrive Market. Seasonal farmers market produce at peak season — cheaper than grocery organic and dramatically better quality. Make it yourself — homemade bone broth, yogurt, granola, condiments, and nut milk cost a fraction of store-bought. Dried beans. Whole chickens (the carcass makes broth).</p>
    </div>
    <div class="callout"><div class="callout-text">The highest-impact swap you can make today: replace your cooking oils with grass-fed butter and avocado oil. This single change removes seed oils from the majority of your daily cooking immediately.</div></div>
    `
  },
  { id:'farming', emoji:'🥦', name:'Farming Practices & Produce', desc:'Soil health, pesticides, labels, and what they actually mean',
    heroColor:'var(--green)', heroEmoji:'🌾', heroTagline:'Everything Starts With the Soil',
    content:`
    <div class="ch-prose">
      <p>Before we talk about any specific food — flour, butter, eggs, produce — we need to talk about the ground everything grows from. Because how food is grown, raised, and handled before it ever reaches your kitchen matters just as much as what you do with it once it gets there.</p>
      <p>The American food system has normalized a way of farming that prioritizes yield, speed, and cost above all else. A carrot grown in mineral-depleted, chemically treated soil is not the same carrot that came out of a thriving regenerative farm. An egg from a hen who never saw sunlight is not the same egg from a hen who ranged freely on pasture.</p>
    </div>
    <div class="ch-section-title">The Three Tiers</div>
    <div class="tier-card"><div class="tier-header conv">Conventional Farming</div><div class="tier-body">Relies on synthetic fertilizers, pesticides, herbicides, and fungicides to maximize yield. Animals are typically raised in concentrated animal feeding operations (CAFOs) — indoors, in close quarters, given antibiotics and growth hormones. The USDA's Pesticide Data Program consistently finds pesticide residues on conventionally grown produce even after washing. Synthetic fertilizers feed the plant but deplete the microbial life in the soil — which is what actually makes food nutritious.</div></div>
    <div class="tier-card"><div class="tier-header org">Organic Farming</div><div class="tier-body">Prohibits synthetic pesticides, fertilizers, GMOs, antibiotics, and growth hormones. Requires outdoor access for animals and organic feed. A meaningful step up from conventional — and for many foods, it makes a significant difference. Important limits: organic certification is about what you don't use, not necessarily what you do build. Some of the largest industrial farms in the country are certified organic.</div></div>
    <div class="tier-card"><div class="tier-header regen">Regenerative Farming — The Gold Standard</div><div class="tier-body">Actively works to restore ecosystem health rather than simply avoiding harm. Centers on soil health: minimizing tillage, keeping soil covered with living plants year-round, integrating livestock into crop systems, increasing biodiversity, and eliminating synthetic inputs. Research consistently finds that food grown regeneratively has higher levels of vitamins, minerals, and phytonutrients than conventionally grown counterparts. The Regenerative Organic Certified (ROC) label is currently the most rigorous certification available — requires USDA Organic as a baseline plus soil health, animal welfare, and farmworker fairness requirements.</div></div>
    <div class="callout"><div class="callout-text">From Soil to Soul: healthy soil → nutrient-dense food → nourished bodies. This is the chain that regenerative farming is rebuilding — and why this chapter comes first.</div></div>
    <div class="ch-section-title">Decoding the Labels</div>
    <div class="tier-card"><div class="tier-header regen">Pasture-Raised + Certified Humane</div><div class="tier-body">Animals spend meaningful time on pasture. The Humane Farm Animal Care (HFAC) standard requires 108+ sq ft of outdoor space per bird for poultry. Without a third-party certifier, "pasture-raised" is an unverified claim — look for Certified Humane or Animal Welfare Approved alongside it. Vital Farms, Alexandre Family Farm, and Pete and Gerry's Organic are reliable brands.</div></div>
    <div class="tier-card"><div class="tier-header regen">Grass-Fed & Grass-Finished</div><div class="tier-body">"Grass-fed" means cattle ate grass at some point — they may have been finished on grain before slaughter. "Grass-fed and grass-finished" means 100% grass diet throughout, which produces a meaningfully different nutritional profile: higher omega-3s, more CLA, better overall fat profile. Look for AGA (American Grassfed Association) certification — the USDA grass-fed standard was revoked in 2016.</div></div>
    <div class="tier-card"><div class="tier-header org">USDA Organic</div><div class="tier-body">A meaningful baseline. No synthetic pesticides, fertilizers, GMOs, antibiotics, or growth hormones. Widely available and increasingly affordable. Doesn't guarantee soil health, meaningful animal welfare, or small farm practices — but it eliminates the most egregious inputs.</div></div>
    <div class="tier-card"><div class="tier-header conv">Natural — Essentially Meaningless</div><div class="tier-body">The USDA has no standard definition for "natural" on most food products. It says nothing about pesticides, GMOs, antibiotics, or farming practices. Don't let this label influence your purchasing decisions. It is marketing, not a standard.</div></div>
    <div class="ch-section-title">The Dirty Dozen & Clean Fifteen</div>
    <div class="ch-prose"><p>The Environmental Working Group publishes annual lists of the highest and lowest pesticide-residue produce. Prioritize organic for strawberries, spinach, kale, peaches, pears, nectarines, apples, grapes, bell peppers, cherries, blueberries, and green beans (Dirty Dozen). Avocados, sweet corn, pineapple, onions, papaya, asparagus, frozen peas, honeydew, kiwi, cabbage, mushrooms, mangoes, sweet potatoes, watermelon, and carrots tend to be lower-risk conventional choices (Clean Fifteen).</p></div>

    <div class="ch-section-title">Conventional vs. Organic vs. Regenerative</div>
    <div class="ch-prose"><p>Not all produce is created equal — and the differences go deeper than whether pesticides were used. Soil health, farming practices, and even how recently the produce was harvested all affect what you are actually eating.</p></div>
    <div class="tier-card"><div class="tier-header conv">Conventional</div><div class="tier-body">
      Grown with synthetic pesticides, herbicides, and fertilizers. The USDA Pesticide Data Program consistently finds residues on conventionally grown fruits and vegetables even after washing. Synthetic fertilizers feed the plant directly but deplete the microbial life in the soil that makes food nutritious — degraded soil biology means degraded nutrient density in the food it produces. The gap between conventional and regenerative produce nutrition is not theoretical: it is measurable in vitamin, mineral, and phytonutrient content.
    </div></div>
    <div class="tier-card"><div class="tier-header org">Organic</div><div class="tier-body">
      No synthetic pesticides, herbicides, GMOs, or synthetic fertilizers. A meaningful upgrade — particularly for the produce on the Dirty Dozen list. However, organic certification is about what you <em>don't</em> use, not necessarily what you do build. Organic farms can still deplete soil biology. Large industrial organic operations exist. Organic is a strong baseline, not the ceiling.<br><br>
      <strong>Worth prioritizing organic for:</strong> strawberries, spinach, kale, peaches, apples, peppers, grapes, pears, cherries, and blueberries — the Dirty Dozen, which consistently test highest for pesticide residues.<br><br>
      <strong>Conventional generally acceptable for:</strong> avocados, sweet corn, pineapple, onions, papaya, frozen sweet peas, asparagus, honeydew melon, kiwi, cabbage, mushrooms, and mangoes — the Clean Fifteen, which test lowest for residues.
    </div></div>
    <div class="tier-card"><div class="tier-header regen">Regenerative ⭐</div><div class="tier-body">
      The gold standard. Regenerative agriculture actively restores ecosystem health — minimizing tillage, keeping soil covered year-round, integrating livestock, increasing biodiversity, and eliminating synthetic inputs. The result is soil teeming with microorganisms that transfer nutrients into food in ways depleted conventional soil cannot.<br><br>
      Research consistently finds regeneratively grown produce has higher levels of vitamins, minerals, and phytonutrients than conventionally or even organically grown counterparts. This is the soil-to-soul connection made tangible.<br><br>
      <strong>Look for:</strong> Regenerative Organic Certified (ROC) — the most rigorous certification available, requiring USDA Organic as a baseline plus soil health, animal welfare, and farmworker fairness standards.
    </div></div>

    <div class="ch-section-title">Reading PLU Codes</div>
    <div class="ch-prose"><p>Every piece of produce in a grocery store has a PLU (Price Look-Up) sticker. These tell you more than the price scanner needs to know — they tell you how it was grown.</p></div>
    <div class="tier-card"><div class="tier-header org">The PLU Code System</div><div class="tier-body">
      <strong>4 digits starting with 3 or 4</strong> → Conventionally grown. Example: 4011 (banana).<br><br>
      <strong>5 digits starting with 9</strong> → Certified organic. Example: 94011 (organic banana). This is the most useful code to memorize — when you're standing in the produce section, a 9 prefix means organic.<br><br>
      <strong>5 digits starting with 8</strong> → Genetically modified (GMO). Example: 84011. Important caveat: this code is voluntary and most GMO produce is not labeled with it. Do not assume that the absence of an 8 prefix means non-GMO.<br><br>
      <strong>No sticker / bulk bin</strong> → Check the bin label or ask staff.
    </div></div>

    <div class="ch-section-title">Starting a Garden</div>
    <div class="ch-prose"><p>Growing even a small amount of your own food changes your relationship with it. A child who grew the tomato will eat the tomato. And home-grown produce harvested and eaten same-day is genuinely a different food than anything in a grocery store — nutritionally, and in every other way.</p></div>
    <div class="tier-card"><div class="tier-header regen">Start Smaller Than You Think</div><div class="tier-body">
      The most common beginner mistake is starting too large. A 4x4 raised bed or a few containers on a patio will teach you more and produce more usable food than an ambitious 20x20 plot that becomes overwhelming by July.<br><br>
      <strong>Start with:</strong> cherry tomatoes (productive and forgiving), zucchini (almost impossible to kill), fresh herbs (basil, parsley, chives — high value per square foot, expensive in stores), lettuce and salad greens (fast, cut-and-come-again, shade-tolerant), and green beans (easy, kid-friendly to harvest).<br><br>
      <strong>The highest-value crops:</strong> anything you eat frequently that is expensive organic — fresh herbs top the list, followed by salad greens, cherry tomatoes, and hot peppers.
    </div></div>
    <div class="tier-card"><div class="tier-header regen">Soil Is Everything</div><div class="tier-body">
      Garden soil quality determines the nutritional quality of your harvest. Fill raised beds with a mix of quality compost (at least 30–40%), topsoil, and an aerating material like perlite or coconut coir. Avoid cheap bagged garden soil with synthetic fertilizers — you will grow food, but it will not be meaningfully different from conventionally grown produce.<br><br>
      <strong>Feed your soil:</strong> compost every season, avoid tilling (which destroys fungal networks), mulch bare soil, and plant cover crops in fall. Healthy soil is alive — the goal is to build that biology, not bypass it with synthetic inputs.
    </div></div>
    <div class="tier-card"><div class="tier-header org">Saving Seeds</div><div class="tier-body">
      Growing from seed is more economical and gives you access to heirloom and open-pollinated varieties that are never available at garden centers — varieties bred for flavor, nutrition, and regional adaptation rather than for uniform appearance and shelf life.<br><br>
      <strong>Look for:</strong> heirloom and open-pollinated seeds from Baker Creek Heirloom Seeds, Fedco Seeds, or your local seed library. Avoid F1 hybrid seeds if you want to save seeds year to year — they do not breed true from saved seed.
    </div></div>

    `
  },
  { id:'meat', emoji:'🥩', name:'Meat & Animal Products', desc:'Factory farming, labels for beef/chicken/pork, and how to source well',
    heroColor:'#e8ddd4', heroEmoji:'🥩', heroTagline:'Buy Less. Buy Better.',
    content:`
    <div class="ch-prose">
      <p>Meat is one of the most nutritionally significant foods in the human diet — and one of the most compromised by modern industrial production. The steak from a grass-finished, regeneratively raised cow and the steak from a confined feedlot operation are not the same food. The nutritional differences are measurable and significant. The differences in how each animal lived are profound. And the impact of each on the land it came from is almost entirely opposite.</p>
      <p>This chapter is not about whether to eat meat. It is about understanding what the labels mean, what the practices actually are, and how to source the most nourishing and ethically produced animal protein available within your budget.</p>
    </div>
    <div class="callout"><div class="callout-text">The single most impactful upgrade you can make to your meat consumption: buy less meat and buy better meat. A smaller amount of high-quality, pasture-raised, grass-finished meat is more nourishing, more ethical, and often more affordable than it initially appears when you factor in the nutritional density.</div></div>

    <div class="ch-section-title">Why Raising Practices Change Everything</div>
    <div class="tier-card"><div class="tier-header conv">The Conventional System (CAFOs)</div><div class="tier-body">
      Concentrated Animal Feeding Operations are the dominant model for beef, pork, and chicken production in the United States. Animals are raised indoors or in confined outdoor lots in extremely high densities, fed grain-based diets (often including corn and soy that their digestive systems were not designed for), and routinely given antibiotics to prevent the disease that comes with those crowded conditions — and in some cases, low-dose antibiotics to promote faster growth.<br><br>
      <strong>What this means for the food:</strong> Grain-fed animals produce meat with a significantly higher omega-6 to omega-3 ratio, less CLA, less vitamin E, and different fat composition than pasture-raised animals. Routine antibiotic use contributes to antibiotic resistance — one of the most serious public health issues of our time. The animals live in conditions that most people, if they saw them, would find deeply troubling.
    </div></div>
    <div class="tier-card"><div class="tier-header regen">Pasture-Raised & Regenerative</div><div class="tier-body">
      Animals raised on pasture live as their biology intended — on grass for ruminants, on forage with outdoor access for pigs and poultry. Regenerative operations go further, using animal grazing as a tool to build soil health: moving animals across land in ways that mimic natural herd behavior, fertilizing soil, and sequestering carbon.<br><br>
      <strong>What this means for the food:</strong> Grass-finished beef has 2–4x more omega-3 fatty acids, significantly more CLA (conjugated linoleic acid, with documented anti-inflammatory and anti-cancer properties), more vitamin E, and more beta-carotene than grain-fed. Pasture-raised pork has dramatically more vitamin D than conventionally raised pork. The nutritional differences are real and consistent.
    </div></div>

    <div class="ch-section-title">Beef — Label by Label</div>
    <div class="tier-card"><div class="tier-header regen">Grass-Fed AND Grass-Finished ⭐</div><div class="tier-body">
      This is the distinction that matters most. <strong>"Grass-fed" alone is not enough</strong> — cattle can be grass-fed for most of their lives and then "grain-finished" in a feedlot for the final 90–160 days before slaughter. That finishing period significantly alters the fat profile of the meat.<br><br>
      <strong>Grass-fed AND grass-finished</strong> means the animal ate grass its entire life. This is the label to look for.<br><br>
      <strong>Third-party certifications to look for:</strong> American Grassfed Association (AGA) seal — the most rigorous certification. USDA grass-fed standard was revoked in 2016, so "USDA grass-fed" without a third-party certifier is unverified.<br><br>
      <strong>Brands:</strong> White Oak Pastures, Northstar Bison, US Wellness Meats, Verde Farms, and local farms and farmers markets.
    </div></div>
    <div class="tier-card"><div class="tier-header org">Certified Organic Beef</div><div class="tier-body">
      Certified organic means no synthetic pesticides or fertilizers in feed, no antibiotics, no growth hormones, and access to pasture. It does not guarantee grass-finishing or meaningful pasture access beyond a minimum standard.<br><br>
      Organic is a meaningful feed and medication upgrade over conventional, but it is not the same as grass-finished. Best when you see both organic AND grass-finished on the same label.
    </div></div>
    <div class="tier-card"><div class="tier-header conv">Natural / No Hormones / No Antibiotics</div><div class="tier-body">
      <strong>"Natural"</strong> is almost meaningless — it only requires minimal processing and no artificial ingredients. It says nothing about how the animal was raised.<br><br>
      <strong>"No added hormones"</strong> is required by law for pork and poultry regardless (hormones are not permitted in those animals), so it means nothing as a beef differentiator unless accompanied by "no added hormones" with a specific claim about practice.<br><br>
      <strong>"No antibiotics"</strong> is more meaningful for beef and can be a useful signal, but is not verified unless it carries a USDA Process Verified seal.
    </div></div>

    <div class="ch-section-title">Chicken — Label by Label</div>
    <div class="tier-card"><div class="tier-header regen">Pasture-Raised Poultry ⭐</div><div class="tier-body">
      As with eggs, pasture-raised is the gold standard for chicken. Certified Humane pasture-raised requires 108+ sq ft of outdoor space per bird — enough for genuine foraging. Pasture-raised chickens eat a diverse diet of grasses, insects, and worms in addition to supplemental feed, producing a measurably more nutritious bird with better fat ratios, more vitamins, and better flavor.<br><br>
      <strong>What to look for:</strong> Certified Humane or Animal Welfare Approved alongside "pasture-raised." Without a third-party certification, the claim is unverified.<br><br>
      <strong>Brands:</strong> Vital Farms, Alexandre Family Farm, and local farms.
    </div></div>
    <div class="tier-card"><div class="tier-header org">Free-Range / Cage-Free</div><div class="tier-body">
      <strong>Free-range poultry</strong> requires only that birds have "access to the outdoors" — no minimum space, no requirement that it be actual pasture or vegetation, no requirement that birds actually go outside regularly. In practice many free-range operations provide a small concrete pad that most birds never use.<br><br>
      <strong>Cage-free</strong> for poultry means birds are not in cages — they are in barn-style facilities, often very crowded, with no outdoor access. A step above battery cages but not a meaningful nutritional upgrade.<br><br>
      Neither label is a reliable indicator of animal welfare or nutritional quality without third-party certification alongside it.
    </div></div>
    <div class="tier-card"><div class="tier-header conv">Air-Chilled</div><div class="tier-body">
      A processing method, not a welfare or feed standard. Air-chilled chickens are cooled with refrigerated air after slaughter rather than being submerged in a shared chlorinated water bath. The benefit: no water absorption (conventional chickens can absorb up to 12% of their weight in chlorinated water, diluting flavor), better texture, and better skin for roasting. Worth seeking out when available — it is a meaningful quality indicator even when combined with conventional raising practices.
    </div></div>

    <div class="ch-section-title">Pork — Label by Label</div>
    <div class="tier-card"><div class="tier-header regen">Pasture-Raised Pork ⭐</div><div class="tier-body">
      Pigs raised on pasture with room to root, forage, and behave naturally produce significantly more nutritious meat than conventionally raised pork. Pasture-raised pork is one of the richest dietary sources of vitamin D available — particularly pigs raised outdoors in sunlight. The fat profile improves dramatically, with higher CLA and omega-3 content.<br><br>
      <strong>What to look for:</strong> Certified Humane or Animal Welfare Approved with pasture-raised claim. Heritage breed pigs (Berkshire, Duroc, Mangalitsa, Red Wattle) are often raised more traditionally and have superior fat quality and flavor.<br><br>
      <strong>Sources:</strong> Local farms, farmers markets, and mail-order from Heritage Foods USA or Crowd Cow.
    </div></div>
    <div class="tier-card"><div class="tier-header conv">Conventional Pork</div><div class="tier-body">
      The overwhelming majority of US pork comes from pigs raised in concentrated indoor operations (CAFOs), often in gestation crates so small sows cannot turn around. Routine antibiotic use is standard. The fat profile of conventionally raised pork is significantly higher in omega-6 and lower in omega-3 and vitamin D than pasture-raised.<br><br>
      Ractopamine, a feed additive that promotes rapid muscle growth, is used in some US pork production and is banned in over 160 countries. If avoiding it is a priority, look for a "no ractopamine" label claim or buy certified humane or organic pork.
    </div></div>

    <div class="ch-section-title">Practical Sourcing Guide</div>
    <div class="tier-card"><div class="tier-header regen">Best Sources — In Order</div><div class="tier-body">
      <strong>1. Local farms direct</strong> — buy a quarter, half, or whole animal directly from a farmer you know. Typically the most economical way to access high-quality pasture-raised meat. Ask your farmer directly about their practices.<br><br>
      <strong>2. Farmers markets</strong> — ask questions. Farmers selling at markets are usually proud of their practices and happy to explain them in detail.<br><br>
      <strong>3. CSA or meat box subscriptions</strong> — Crowd Cow, ButcherBox, and White Oak Pastures direct ship quality options. Prices are higher but the quality difference is real.<br><br>
      <strong>4. Natural grocery stores</strong> — Whole Foods, co-ops, and specialty grocery stores carry more certified options than conventional grocery chains.
    </div></div>
    <div class="tier-card"><div class="tier-header org">Budget Strategy</div><div class="tier-body">
      Quality meat is expensive. Here is how to eat well without breaking your food budget:<br><br>
      <strong>Buy the whole animal:</strong> A quarter beef split with another family is almost always the most economical option per pound for grass-finished beef.<br><br>
      <strong>Prioritize cheaper cuts:</strong> Ground beef, chuck roast, short ribs, and chicken thighs from quality sources cost significantly less per pound than steaks and chicken breasts while delivering equal or better nutrition.<br><br>
      <strong>Use bones:</strong> Grass-fed beef bones for bone broth are inexpensive and produce extraordinary results. A $10 bag of bones makes 3 quarts of deeply nutritious broth.<br><br>
      <strong>Eat less, better:</strong> A 4 oz serving of grass-finished beef with roasted vegetables and a grain is a complete, nourishing meal. Meat does not need to dominate the plate to be the star of it.
    </div></div>

    `
  },
  { id:'grains', emoji:'🌾', name:'Grains & Milling', desc:'Why fresh-milled flour changes everything — and all the wheat berry types',
    heroColor:'#e8dcc8', heroEmoji:'🌾', heroTagline:'Living Flour — Nutrition at Its Peak',
    content:`
    <div class="ch-prose">
      <p>If there is one topic in this entire book that I wish more people understood, it's this one. Flour. Specifically, what happens to it between the field and your kitchen — and why that gap matters more than most people realize.</p>
      <p>Flour is a living food. Once a grain is milled, the clock starts ticking. Freshly milled flour — ground at home minutes before you use it — is a fundamentally different ingredient than anything in a bag at the grocery store. When you mill grain right before baking, the oils are still fresh, the vitamins intact, and the flavor naturally sweet and complex. Once you bake with it, you'll taste the difference immediately.</p>
    </div>
    <div class="callout"><div class="callout-text">What refining actually does: when grain is milled into white flour, the bran and germ are removed — taking up to 80% of the vitamins and minerals. The FDA then requires "enrichment" with five synthetic nutrients to partially compensate. Five, to replace what was naturally dozens.</div></div>
    <div class="ch-section-title">The Anatomy of a Grain</div>
    <div class="tier-card"><div class="tier-header regen">The Bran</div><div class="tier-body">The outer layer. Rich in fiber, B vitamins, and minerals like iron, zinc, and magnesium. Slows digestion, feeds beneficial gut bacteria, gives whole grain products their color and texture.</div></div>
    <div class="tier-card"><div class="tier-header regen">The Germ</div><div class="tier-body">The embryo — what would sprout into a new plant. The most nutritionally dense part of the kernel, packed with vitamin E, B vitamins, healthy fats, antioxidants, and phytonutrients. Also the most perishable. The oils in the germ begin to oxidize within 72 hours of milling — which is why freshly milled flour tastes completely different from bagged flour.</div></div>
    <div class="tier-card"><div class="tier-header conv">The Endosperm</div><div class="tier-body">The starchy center — what feeds the sprouting seed. This is what white flour is made from. Provides carbohydrates and some protein, but very little in the way of vitamins, minerals, or fiber compared to the whole kernel.</div></div>
    <div class="ch-section-title">How to Mill at Home</div>
    <div class="ch-prose"><p>Home grain milling is simpler than most people expect. You need three things: a grain mill, whole grain berries, and a few minutes before you bake. Measure your berries, run them through the mill into a bowl, and use the flour immediately or within a day or two. It takes about 2–3 minutes to mill enough flour for a loaf of bread. See the Grains & Milling section for mill recommendations.</p></div>
    <div class="ch-section-title">Ancient Grains & Gluten</div>
    <div class="ch-prose"><p>Many people who experience discomfort with conventional wheat find they tolerate ancient grains like einkorn and spelt much better — not because those grains are gluten-free (they aren't), but because their gluten structure is fundamentally different. Einkorn has a simpler chromosomal structure (diploid vs. modern wheat's hexaploid) and contains a form of gliadin that some research suggests is less reactive. Note: if you have celiac disease, ancient grains containing gluten are not safe. This is about sensitivity and digestibility, not celiac management.</p></div>
    <div class="ch-section-title">Wheat Berry Profiles</div>
    <div class="tier-card" style="border:2px solid var(--mauve)"><div class="tier-header regen" style="background:var(--mauve-dark);color:white">⭐ Einkorn — The Foundation of This Entire Book</div><div class="tier-body">
<strong>This is my grain, and this book is built entirely around it.</strong> Every recipe that calls for flour in these pages is written specifically for freshly milled einkorn. Not whole wheat. Not spelt. Einkorn. Understanding why will make everything click.<br><br>
<em>Triticum monococcum.</em> The oldest cultivated wheat in the world — over 10,000 years old — and essentially unchanged since it fed the ancient world. While modern wheat was aggressively hybridized through the 20th century to maximize yield and gluten strength (at the expense of nutrition, digestibility, and flavor), einkorn was left alone. It is a diploid grain with the simplest chromosomal structure of any wheat, and its gluten behaves completely differently from modern wheat — more delicate, more digestible, and far better tolerated by people who struggle with conventional wheat.<br><br>
<strong>Why I chose it for everything:</strong> Einkorn is higher in protein than modern wheat, significantly richer in lutein, beta-carotene, and riboflavin, and more bioavailable in minerals like iron, zinc, and magnesium. It contains a simpler form of gliadin — the component of gluten most associated with inflammatory responses — and many people who cannot eat conventional wheat do beautifully on einkorn. My girls are proof of that.<br><br>
<strong>Flavor:</strong> Rich, buttery, slightly nutty, naturally sweet. The deep golden color of every baked good made with einkorn comes from its extraordinary carotenoid content — you cannot replicate that with conventional flour. Once you taste freshly milled einkorn pancakes or sourdough, everything else tastes flat by comparison.<br><br>
<strong>My source:</strong> Jovial Foods — certified organic, single-origin, traceable to family farms in Italy. Buy the whole berries and mill them fresh. The bag of flour on the store shelf cannot compete.</div></div>

<div class="callout" style="background:#fdf6f4;border-left:3px solid var(--mauve)"><div class="callout-text"><strong>Important: einkorn is not a 1:1 swap for all-purpose flour.</strong> Its gluten is weaker and more delicate — it absorbs liquid differently and needs gentler handling. Every recipe in this book is written and tested for einkorn specifically. If you are adapting an outside recipe, reduce liquid by roughly 15–20%, mix only until just combined, and expect a slightly more tender crumb. It takes one or two bakes to develop a feel for it — and then you will never want to go back.</div></div>
    <div class="tier-card"><div class="tier-header regen">Spelt — The Everyday Ancient Grain</div><div class="tier-body"><em>Triticum spelta.</em> More closely related to modern wheat than einkorn but cultivated thousands of years without industrial hybridization. More widely available and often easier to work with in existing recipes. Higher in protein and fiber than modern wheat; good source of B vitamins, manganese, phosphorus, and magnesium; more water-soluble gluten that many find easier to digest.<br><br><strong>Flavor:</strong> Earthy, slightly sweet, mild nuttiness. More neutral than einkorn — a good bridge grain when transitioning from conventional flour.<br><strong>Best for:</strong> Breads, muffins, pizza dough, crackers, cookies. A more direct conventional recipe substitute than einkorn.</div></div>
    <div class="tier-card"><div class="tier-header org">Hard Red Wheat — The Bread Baker's Workhorse</div><div class="tier-body">The traditional whole grain flour of classic American bread baking. High protein (12–15%) develops strong gluten networks ideal for yeasted breads. Good source of fiber, B vitamins, iron, zinc, and selenium.<br><br><strong>Flavor:</strong> Robust, slightly tangy, heartier whole grain flavor. Darker, more rustic crumb.<br><strong>Best for:</strong> Yeasted sandwich breads, sourdough, pizza dough, bagels, rolls. Not ideal for tender baked goods like cakes or muffins.</div></div>
    <div class="tier-card"><div class="tier-header org">Hard White Wheat — The Gentle Whole Grain</div><div class="tier-body">Same species as hard red wheat but lacks the genes producing tannins and pigments — resulting in a milder flavor and lighter color. Nearly identical nutritional profile (high fiber, B vitamins, iron, zinc, selenium) but gentler and more versatile.<br><br><strong>Flavor:</strong> Mild, slightly sweet, clean whole grain. Lighter crumb, less pronounced whole wheat taste.<br><strong>Best for:</strong> Sandwich breads, pancakes, waffles, muffins, tortillas. The ideal starting grain for families transitioning from white flour — kids often don't notice.</div></div>
    <div class="tier-card"><div class="tier-header org">Rye — The Fermentation Grain</div><div class="tier-body">Hardy grain with a long history in Northern and Eastern European baking. High in arabinoxylan fiber — feeds beneficial gut bacteria more effectively than wheat fiber. Outstanding fiber content, high B vitamins, iron, magnesium, zinc. Lower glycemic impact than wheat.<br><br><strong>Flavor:</strong> Bold, earthy, slightly tangy — complexity that deepens with fermentation.<br><strong>Best for:</strong> Sourdough bread, rye crackers, dark breads. Even adding 10–20% rye to wheat sourdoughs noticeably improves flavor and crust.</div></div>
    <div class="tier-card"><div class="tier-header regen">Kamut (Khorasan Wheat) — The Ancient Luxury Grain</div><div class="tier-body"><em>Triticum turgidum ssp. turanicum.</em> Ancient durum wheat from the Fertile Crescent. Always sold certified organic under the Kamut brand — guaranteed never hybridized. 17–28% more protein than modern wheat; excellent source of selenium, zinc, magnesium, and B vitamins; high in healthy unsaturated fats from the germ.<br><br><strong>Flavor:</strong> Rich, buttery, sweet, luxurious — often described as the most flavorful wheat variety.<br><strong>Best for:</strong> Pasta, flatbreads, cookies, pie crusts, grain salads (cooked whole kernels are beautiful and chewy).</div></div>
    <div class="callout"><div class="callout-text">You don't have to mill everything. Even milling some flour fresh — especially for breads, pancakes, and muffins — is a meaningful upgrade. Start with einkorn or hard white wheat. They're the most forgiving for beginners.</div></div>

    <div class="ch-section-title">Flour Conversions</div>
    <div class="tier-card"><div class="tier-header regen">Freshly Milled Einkorn — All Recipes in This Book</div><div class="tier-body">
      Every recipe that calls for flour in this book is written for freshly milled whole grain einkorn. This is the baseline.<br><br>
      <strong>1 cup freshly milled einkorn ≈ 105g</strong><br>
      Slightly lighter per cup than store-bought because it hasn't settled. When in doubt, weigh your flour.
    </div></div>
    <div class="tier-card"><div class="tier-header org">Store-Bought Jovial Whole Grain Einkorn</div><div class="tier-body">
      The best commercially available substitute. Use it as a direct swap in all recipes.<br><br>
      <strong>1 cup store-bought whole grain einkorn ≈ 120g</strong><br>
      May need slightly less per cup than the recipe calls for. Weighing is always more accurate than volume.
    </div></div>
    <div class="tier-card"><div class="tier-header org">Adapting Any Recipe to Einkorn</div><div class="tier-body">
      When converting a conventional recipe:<br><br>
      • <strong>Substitute 1:1 by weight</strong> (not volume)<br>
      • <strong>Reduce liquid by 15–20%</strong> — einkorn absorbs liquid more slowly<br>
      • <strong>Mix minimally</strong> — its gluten is delicate and gets gummy if overworked<br>
      • <strong>Expect faster fermentation</strong> in sourdoughs and yeasted doughs<br>
      • <strong>Expect a more tender crumb</strong> — this is correct, not a flaw<br>
      Cookies, muffins, and quick breads typically work beautifully on the first try. Yeast breads take two or three bakes to dial in.
    </div></div>
    <div class="tier-card"><div class="tier-header conv">Jovial White Einkorn (Sifted)</div><div class="tier-body">
      Bran removed — lighter texture, closer to all-purpose behavior. Useful for pasta, thin crepes, and delicate cakes. Less fiber than whole grain but far superior to conventional white flour.<br><br>
      <strong>1 cup white einkorn ≈ 120g</strong>
    </div></div>

    <div class="ch-section-title">Where to Source</div>
    <div class="ch-prose"><p><strong>Jovial Foods</strong> — my go-to for einkorn berries and flour, certified organic, single-origin, traceable to family farms in Italy. <strong>Breadtopia</strong> — excellent selection of hard red, hard white, spelt, rye, and kamut. <strong>Azure Standard</strong> — bulk organic grain berries at great prices, especially strong for stocking up. And look for a local grain mill or wheat farmer in your region — many sell direct.</p></div>

    `
  },
  { id:'dairy', emoji:'🥛', name:'Dairy & Alternatives', desc:'What processing does to milk, the dairy spectrum, and honest non-dairy options',
    heroColor:'#e8e0d4', heroEmoji:'🥛', heroTagline:"The Problem Is What We've Done to Dairy",
    content:`
    <div class="ch-prose">
      <p>Dairy is one of the most polarizing topics in the whole foods world. The problem with dairy in America is not dairy — it is what we have done to dairy. Conventional milk from grain-fed, confined cows, ultra-pasteurized to the point of nutritional compromise, homogenized to alter its fat structure, stripped of its fat to make it "healthy" — that product has little in common with the whole, raw, grass-fed milk humans have consumed for thousands of years.</p>
    </div>
    <div class="callout"><div class="callout-text">The fat is the point. Full-fat dairy from well-raised animals contains fat-soluble vitamins A, D, E, and K2 — nutrients that are inseparable from the fat that carries them. Low-fat dairy is a nutritionally compromised product.</div></div>
    <div class="ch-section-title">What Industrial Processing Does to Milk</div>
    <div class="ch-prose">
      <p><strong>Pasteurization:</strong> Standard pasteurization heats milk to 161°F for 15 seconds. Ultra-high temperature (UHT) pasteurization — used in most commercially sold milk — heats it to 280°F for 2 seconds. What is destroyed: beneficial bacteria, the enzymes that aid digestion (including lactase — the enzyme that digests lactose), heat-sensitive vitamins, and immunoglobulins that support immune function. Many people who believe they are "lactose intolerant" are actually reacting to the absence of lactase enzyme — not to dairy itself. UHT milk can sit unrefrigerated for months; that tells you something.</p>
      <p><strong>Homogenization:</strong> Forces milk through tiny openings at high pressure to break fat globules into uniform particles that stay suspended rather than rising as cream. Developed for consistency and shelf appeal. The natural fat globule membrane is disrupted, altering how fat is absorbed and digested. Many people who react to commercial milk tolerate unhomogenized milk without issue. The cream line on top is your visual quality indicator.</p>
      <p><strong>Fat removal:</strong> The push toward low-fat and skim milk removed the most nutritionally valuable parts of milk. Fat-soluble vitamins (A, D, E, and K2) are carried in the fat. Remove the fat and you remove the vitamins. Skim milk is fortified with synthetic vitamin D — the natural version was poured away with the cream.</p>
    </div>
    <div class="ch-section-title">The Dairy Spectrum</div>
    <div class="tier-card" style="border:2px solid #8aad8a"><div class="tier-header regen" style="background:#5a8a5a;color:white">⭐ Raw Whole Milk — Grass-Fed — The Gold Standard</div><div class="tier-body">
<strong>Raw milk is a whole food.</strong> It is milk exactly as it comes from the animal — nothing added, nothing removed, nothing heated. Humans consumed raw milk from healthy animals for thousands of years before industrial processing existed. Much of what we call "dairy intolerance" today is intolerance to what modern processing has done to milk — not to milk itself.<br><br>
<strong>The enzymes make it a living food.</strong> Raw milk contains a full spectrum of naturally occurring enzymes that pasteurization destroys. Most significant is <em>lactase</em> — the enzyme that digests lactose. This is why many people who believe they are lactose intolerant drink raw milk without any difficulty. Their body was never missing the ability to digest lactose; their milk was just missing the enzyme that makes digestion possible. Raw milk also contains lipase (fat digestion), phosphatase (critical for calcium absorption), and dozens of other active enzymes that make raw milk dramatically more bioavailable than its pasteurized counterpart. When you pasteurize milk, you don't just kill bacteria — you destroy the biological machinery the food uses to nourish you.<br><br>
<strong>A living microbiome.</strong> Raw milk from a healthy, well-managed herd contains beneficial bacteria — Lactobacillus strains and others — that constitute a genuine probiotic food. These organisms support the gut microbiome, contribute to immune development particularly in children, and are entirely absent from pasteurized milk.<br><br>
<strong>Intact immune factors.</strong> Immunoglobulins and lactoferrin — proteins that support immune function and have antimicrobial properties — are present in meaningful quantities in raw milk and largely denatured by heat. The fat-soluble vitamins A, D, E, and K2 are present in their most natural, bioavailable form. CLA and omega-3 content is significantly higher from grass-fed animals.<br><br>
<strong>Who should consider trying it:</strong> People who have been told they are lactose intolerant but have never tried raw milk. Anyone who reacts to conventional dairy but hasn't isolated whether the issue is lactose, A1 protein, pasteurization, homogenization, or grain-fed fat quality. Children with recurring ear infections, eczema, or seasonal allergies. Raw milk addresses all of those variables simultaneously — and many families are astonished by what changes.<br><br>
<strong>Quality and batch testing are everything.</strong> The safety profile of raw milk is inseparable from the quality of the source. Raw milk from a clean, small-scale, grass-fed, rigorously tested herd is an entirely different conversation than raw milk from an industrial dairy. What to look for: 100% grass-fed animals, a small herd where the farmer knows each animal individually, regular pathogen testing (coliform, listeria, salmonella), clean milking and handling practices, and a farmer who is transparent about their protocols and welcomes your questions. The best operations test every batch before it ships. Ask your farmer how often they test, what they test for, and whether they share results. A farmer who tests consistently and openly is the one to trust. This is not a product to source anonymously.<br><br>
<strong>Legality:</strong> Raw milk is legal to sell in some states and requires a herdshare arrangement in others. Check realmilk.com for your state's current laws.<br><br>
<em>Taylor's note: This is what our family drinks. Finding a good source took time, but it changed everything. My children, who showed early signs of dairy sensitivity as infants, thrive on it. The lactase enzyme alone was the game-changer for us. If you have written off dairy because of how your body responds to conventional milk — please try a quality raw source before making that decision permanent.</em>
</div></div>
    <div class="tier-card"><div class="tier-header regen">Grass-Fed, Non-Homogenized, Low-Temp Pasteurized</div><div class="tier-body">Vat pasteurization heats milk to 145°F for 30 minutes — gentler, preserves more enzyme activity, less damaging to protein and fat structure. Non-homogenized = cream on top = natural fat structure intact. Next best option when raw milk isn't accessible.<br><br>Brands: Organic Valley Grassmilk, Alexandre Family Farm, Natural by Nature, Kalona SuperNatural.</div></div>
    <div class="tier-card"><div class="tier-header org">A2 Milk</div><div class="tier-body">Contains only A2 beta-casein protein. A1 beta-casein (in conventional milk) produces a peptide (BCM-7) linked to digestive discomfort in sensitive individuals. Goat milk, sheep milk, and heritage breeds like Jersey and Guernsey naturally produce predominantly A2 milk. Worth trying before eliminating dairy entirely. The A2 Milk Company brand is widely available.</div></div>
    <div class="tier-card"><div class="tier-header conv">Conventional UHT</div><div class="tier-body">Heated to 280°F. Destroys beneficial bacteria, enzymes, and heat-sensitive vitamins. Shelf-stable for months. The most processed and least nutritious form. Any of the above options is a meaningful upgrade.</div></div>
    <div class="ch-section-title">Non-Dairy Alternatives — An Honest Guide</div>
    <div class="callout"><div class="callout-text">Check every label. The majority of commercial dairy alternatives contain canola oil, sunflower oil, or other seed oils as primary ingredients. An oat milk or almond milk with seed oils is not a health upgrade from conventional dairy.</div></div>
    <div class="tier-card"><div class="tier-header regen">Full-Fat Coconut Milk — Best Non-Dairy Option</div><div class="tier-body">Creamy, rich, naturally sweet, and made from coconut flesh and water — that's it in quality brands. No seed oils, no gums needed. Good source of MCTs, particularly lauric acid, which has antimicrobial and antiviral properties. Works beautifully in cooking, baking, coffee, curries, and smoothies. The fat content makes it genuinely satisfying.<br><br><strong>Best brands:</strong> Look for cans with 2 ingredients: coconut and water. Thai Kitchen Organic, Native Forest, Thrive Market. Avoid carrageenan and guar gum when possible.</div></div>
    <div class="tier-card"><div class="tier-header regen">Homemade Cashew Milk — My #2 Pick</div><div class="tier-body">Creamy, naturally sweet, neutral flavor that works in coffee, smoothies, baking, and sauces. Unlike almond milk, cashews blend completely smooth without straining — making it the fastest homemade nut milk.<br><br><strong>How to make it:</strong> Soak 1 cup raw cashews in filtered water 4–8 hours (or 30 min in hot water). Drain and rinse. Blend with 3–4 cups fresh filtered water 60 seconds on high until completely smooth. Add a pinch of salt and optionally a date or splash of vanilla. Store in a sealed glass jar, refrigerate up to 4 days. No straining required. The leftover pulp can be dried as nut flour — nothing is wasted.<br><br><em>Taylor's tip: Make a batch Sunday and use it all week. Costs a fraction of store-bought and contains nothing but cashews, water, and salt.</em></div></div>
    <div class="tier-card"><div class="tier-header org">Homemade Almond / Macadamia Milk</div><div class="tier-body">Homemade is excellent — clean and genuinely nut-flavored. Store-bought almond milk is a different product: typically only 2% almonds, diluted with water, then fortified and thickened with gums to simulate milk. Macadamia nut milk is wonderfully buttery and is one of the better store-bought options if labels are clean.<br><br>To make: soak 1 cup raw nuts 8–12 hours. Blend with 3–4 cups water. Strain through a nut milk bag. Use pulp as nut flour.</div></div>
    <div class="tier-card"><div class="tier-header conv">Oat Milk — Why It's Problematic</div><div class="tier-body">Marketed as a health food. Reality: the starch in oats is enzymatically broken down into sugars during commercial production, giving oat milk a high glycemic impact — more so than eating oats themselves. The vast majority of commercial brands contain canola or sunflower oil added for creaminess. Glyphosate contamination is a concern (oats are heavily desiccated with glyphosate pre-harvest). If you love oat milk, make it at home from certified glyphosate-free oats without oil, and use it quickly before the starch continues breaking down.</div></div>
    
    <div class="callout"><div class="callout-text">Know what you're actually reacting to. Is it the lactose? The A1 protein? The pasteurization? The homogenization? Narrowing it down opens up options you may not have considered.</div></div>`
  },
  { id:'eggs', emoji:'🥚', name:'Eggs', desc:"Decoding the carton — what every label actually means and why it matters",
    heroColor:'#f0e8d0', heroEmoji:'🥚', heroTagline:'The Orange Yolk Tells the Story',
    content:`
    <div class="ch-prose">
      <p>If there is one food where the label lies most consistently, it is eggs. The egg carton has become a masterclass in marketing language designed to make you feel good about a purchase without telling you anything meaningful about how the hen lived or what she ate.</p>
      <p>Eggs from hens raised on pasture are a genuinely different food than eggs from hens confined indoors. A hen foraging on pasture eats a diverse diet of grasses, seeds, insects, and worms — rich in carotenoids, omega-3s, fat-soluble vitamins, and antioxidants — all of which transfer directly into her eggs. A hen confined indoors on grain eats a nutritionally limited diet that reflects in her eggs.</p>
    </div>
    <div class="callout"><div class="callout-text">The orange yolk test: crack a pasture-raised egg next to a conventional egg and compare the yolks. The color difference is the nutritional difference — made visible. Beta-carotene, lutein, and zeaxanthin are responsible for that deep orange color. More orange = more of these compounds.</div></div>
    <div class="ch-section-title">Nutrient Comparison</div>
    <div class="tier-card"><div class="tier-header regen">Pasture-Raised vs. Conventional</div><div class="tier-body">Vitamin E: ~3x higher · Omega-3 fatty acids: ~2–3x higher · Vitamin A: ~2x higher · Vitamin D: ~4x higher · Beta-carotene: ~7x higher · Folate: ~2x higher · CLA: higher in grass-supplemented hens<br><br>These are not marginal differences. A hen with genuine access to pasture produces an egg that is functionally a different food.</div></div>
    <div class="ch-section-title">Decoding the Carton</div>
    <div class="tier-card"><div class="tier-header regen">Pasture-Raised + Certified Humane ✓ Best</div><div class="tier-body">Hens have meaningful access to outdoor pasture year-round. The HFAC Certified Humane standard requires a minimum of 108 sq ft of outdoor space per bird — enough for genuine foraging behavior. Always look for the certification seal alongside the label: Certified Humane or Animal Welfare Approved. Reliable brands: Vital Farms, Alexandre Family Farm, Pete and Gerry's Organic Pasture Raised.</div></div>
    <div class="tier-card"><div class="tier-header org">Free-Range — Weaker Than It Sounds</div><div class="tier-body">USDA free-range requires only that hens have "access to the outdoors" — no minimum space requirement, no requirement for actual pasture or vegetation. In practice, many operations provide a small door to a concrete pad. Without third-party certification, this label is largely marketing. The gap between "free-range" and "pasture-raised" is vast.</div></div>
    <div class="tier-card"><div class="tier-header org">Cage-Free — A Low Bar</div><div class="tier-body">Hens are not in battery cages. A step up from conventional — but cage-free barns often house tens of thousands of birds in crowded indoor conditions with no outdoor access whatsoever. Nutritionally, the difference from caged eggs is minimal because diet is the primary driver of egg nutrition, and both are fed similar grain-based diets.</div></div>
    <div class="tier-card"><div class="tier-header conv">Vegetarian-Fed — A Red Flag</div><div class="tier-body">One of the most misleading labels on egg cartons. Chickens are not vegetarians — they are omnivores who naturally eat insects, worms, and grubs. A vegetarian diet for a chicken is an unnatural diet. This label frequently signals that hens are kept entirely indoors with no outdoor access. When you see "vegetarian-fed" featured prominently, read it as a potential signal of confinement. A hen on pasture eats bugs — and that is a good thing.</div></div>
    <div class="tier-card"><div class="tier-header conv">Organic Alone — Feed Standard Only</div><div class="tier-body">USDA Organic means non-GMO feed, no antibiotics or hormones, and outdoor access — but with the same lack of specific space requirements as free-range. Organic is a meaningful feed upgrade but not a welfare or full nutritional upgrade on its own. Best when combined with pasture-raised.</div></div>
    <div class="ch-section-title">How to Source Better Eggs</div>
    <div class="ch-prose"><p>The single best source is a local farm where you can see the operation and ask questions directly. At farmers markets, ask: Do your hens have access to pasture year-round? What do you supplement their diet with? How many hens per acre? A farmer proud of their flock will love these questions. Farm-fresh eggs from a local pasture-based operation are almost always nutritionally superior to anything in a grocery store — and often comparably priced to premium store brands when you factor in the quality difference.</p></div>

    <div class="ch-section-title">The Full Dairy Family</div>
    <div class="ch-prose"><p>Dairy is not just milk. The fermented, cultured, and concentrated forms of dairy are nutritionally distinct — often more digestible, more mineral-dense, and more probiotic than fresh milk. Here is how to source and use the full spectrum.</p></div>

    <div class="tier-card"><div class="tier-header regen">Butter — Grass-Fed & Non-Negotiable</div><div class="tier-body">
      Butter is one of the most nutrient-dense traditional fats in the human diet. From grass-fed cows, it is in a category of its own: the cows' diet of fresh grass directly changes the nutritional composition of their milk fat, producing butter with significantly higher fat-soluble vitamins, CLA, and omega-3s than grain-fed butter.<br><br>
      <strong>Nutrient highlights:</strong> Vitamins A, D, E, and K2 in natural form; high CLA (anti-inflammatory, associated with anti-cancer properties in research); butyrate (feeds the gut lining, anti-inflammatory); grass-fed butter has 5x more CLA than grain-fed.<br><br>
      <strong>Smoke point:</strong> ~300°F for whole butter. Use ghee for high-heat cooking.<br><br>
      <strong>What to buy:</strong> Kerrygold is the most widely available genuinely grass-fed option and consistently reliable. For the highest quality, source from a local dairy or look for grass-finished butter from small creameries. Vital Farms is another excellent option.<br><br>
      <strong>Cultured butter</strong> — made by fermenting cream before churning — has a more complex, tangy flavor and slightly higher probiotic content. Worth making at home (recipe in the Ferments section) or finding at a specialty store.
    </div></div>

    <div class="tier-card"><div class="tier-header regen">Yogurt — Homemade Is Worth It</div><div class="tier-body">
      Fermented dairy is dairy at its most digestible and nutritionally potent. The fermentation process partially pre-digests lactose and proteins, making yogurt accessible to many people who struggle with fresh milk. The beneficial bacteria in yogurt are genuinely probiotic — surviving digestion and colonizing the gut.<br><br>
      <strong>Commercial yogurt problems:</strong> Most commercial yogurt is made from pasteurized, homogenized, often low-fat milk, contains 2–7 bacterial strains, and is loaded with sugar or artificial sweeteners in flavored versions. The probiotic count is typically far lower than marketed.<br><br>
      <strong>Why to make your own:</strong> Homemade yogurt from good milk contains dramatically more live cultures, is significantly cheaper per ounce, and is made exactly as thick or thin as you like. It takes 30 active minutes and 8 hours of waiting. The recipe is in the Ferments section.<br><br>
      <strong>Sourcing commercial yogurt:</strong> Full-fat, plain, grass-fed whenever possible. Look for Maple Hill, Seven Stars Farm, or Stonyfield Organic. Avoid anything flavored or low-fat.
    </div></div>

    <div class="tier-card"><div class="tier-header regen">Kefir — The Probiotic Powerhouse</div><div class="tier-body">
      Kefir is fermented milk made with kefir grains — a symbiotic culture of bacteria and yeasts. It contains 30–50 bacterial and yeast strains versus the 2–7 in most commercial yogurts, making it one of the most probiotic-diverse foods available anywhere. The fermentation process consumes most of the lactose, making kefir well-tolerated by many lactose-intolerant individuals.<br><br>
      <strong>Research highlights:</strong> Kefir has been shown to improve lactose digestion even in clinically lactose-intolerant individuals; it has documented immune-modulating effects; and its diverse microbial community produces compounds (including vitamin K2) not found in yogurt.<br><br>
      <strong>How to use it:</strong> Drink plain, use as a buttermilk substitute in baking (it makes extraordinarily tender pancakes and quick breads), blend into smoothies, or use as a base for dressings and dips.<br><br>
      <strong>Sourcing:</strong> Lifeway Kefir is widely available. Raw milk kefir from a local farm is the gold standard. Making your own from kefir grains is easy and economical (recipe in Ferments section).
    </div></div>

    <div class="tier-card"><div class="tier-header regen">Ghee — Ancient Clarified Butter</div><div class="tier-body">
      Ghee is butter that has been slowly simmered until all water evaporates and milk solids are removed, leaving pure golden butterfat. A staple of Ayurvedic medicine and traditional Indian cooking for thousands of years.<br><br>
      <strong>Why ghee instead of butter?</strong> Smoke point of ~485°F vs ~300°F for butter — ideal for high-heat searing, roasting, and frying. Completely lactose and casein free, making it suitable for most people with dairy sensitivities. Extraordinarily rich, nutty flavor.<br><br>
      <strong>Making your own:</strong> Simmer grass-fed butter over low heat 15–20 minutes until milk solids sink to the bottom and the fat turns golden and clear. Strain through cheesecloth. Far cheaper than store-bought and the quality is unmatched. Fourth & Heart and Tin Star Foods make reliable store-bought versions.
    </div></div>

    <div class="tier-card"><div class="tier-header regen">Cheese — Aged, Raw, and Grass-Fed</div><div class="tier-body">
      Traditional cheese-making is a form of fermentation — milk transformed into a concentrated, shelf-stable, probiotic-rich food. Aged raw milk cheeses are among the most nutritionally complete dairy foods available.<br><br>
      <strong>Nutrient highlights:</strong> Highly concentrated fat-soluble vitamins A, D, E, and K2 — aged cheeses like Gouda, Brie, and Edam are among the richest dietary sources of vitamin K2 available anywhere. K2 directs calcium into bones and teeth rather than arteries. Eating good aged cheese is genuinely good for cardiovascular health.<br><br>
      <strong>What to look for:</strong> Raw milk, grass-fed, and/or aged cheeses from reputable producers. Organic Valley raw cheddar, Kerrygold aged cheeses, Rumiano Organic, and cheese from local dairies and farmers markets. Avoid processed cheese products and anything labeled "pasteurized process cheese food" — these are not cheese.<br><br>
      <strong>Raw vs. pasteurized cheese:</strong> Raw milk cheese made in the US must be aged at least 60 days — a regulation based on the premise that aging kills pathogens. Many excellent domestic raw cheeses are available. Imported raw aged cheeses (Parmigiano-Reggiano, Comté, Gruyère) are the gold standard of the cheese world.
    </div></div>

    <div class="tier-card"><div class="tier-header regen">Heavy Cream & Sour Cream</div><div class="tier-body">
      Heavy cream from grass-fed cows is one of the most versatile and nourishing ingredients in a whole foods kitchen — exceptional concentration of fat-soluble vitamins, highest CLA content of any dairy product, rich in butyrate.<br><br>
      <strong>Label check:</strong> Read cream labels carefully — many heavy creams contain carrageenan as a thickener. You want cream with one ingredient: cream. Organic Valley and Alexandre Family Farm are reliable options.<br><br>
      <strong>Sour cream</strong> is cultured cream — fermented with Lactobacillus cultures. Full-fat sour cream from grass-fed sources is probiotic, nutritious, and an excellent substitute for processed dips and condiments. It can also substitute for crème fraîche in most applications.
    </div></div>

    `
  },
  { id:'fats', emoji:'🫒', name:'Fats & Oils', desc:'The fats we use, the ones we avoid, and why seed oils are the real problem',
    heroColor:'#d4e0c8', heroEmoji:'🫒', heroTagline:'Fat Is Not the Enemy — Industrial Processing Is',
    content:`
    <div class="ch-prose">
      <p>For the better part of the 20th century, fat was the villain. Low-fat everything. Fat-free yogurt, margarine instead of butter, cooking sprays instead of lard. We were told that dietary fat — especially saturated fat — caused heart disease, and an entire generation of Americans restructured their diets around that belief. The science behind that recommendation was deeply flawed, heavily influenced by industry funding, and has since been significantly challenged. And in the rush to remove fat from the American diet, something had to take its place: refined carbohydrates and industrial seed oils.</p>
      <p>Fat is not the enemy. Fat is essential. Every cell membrane in your body is made of fat. Your brain is nearly 60% fat. Fat-soluble vitamins A, D, E, and K cannot be absorbed without dietary fat. Hormones are synthesized from fat. The question was never whether to eat fat. The question was always which fats.</p>
    </div>
    <div class="callout"><div class="callout-text">A 2010 meta-analysis in the American Journal of Clinical Nutrition reviewed 21 studies involving nearly 350,000 subjects and found no significant association between saturated fat intake and cardiovascular disease. The conversation in nutrition science has shifted considerably — though public health messaging has been slow to catch up.</div></div>
    <div class="ch-section-title">The Fats We Use</div>
    <div class="tier-card"><div class="tier-header regen">Grass-Fed Butter — Daily Staple</div><div class="tier-body">Rich in fat-soluble vitamins A, D, E, and K2; high in CLA (anti-inflammatory, associated with anti-cancer properties in research); contains butyrate, a short-chain fatty acid that feeds the gut lining; grass-fed butter has 5x more CLA than grain-fed. Smoke point ~300°F — use ghee for higher heat. Kerrygold is widely available and genuinely grass-fed. For everyday cooking, baking, finishing sauces, and spreading.</div></div>
    <div class="tier-card"><div class="tier-header regen">Ghee — High Heat Champion</div><div class="tier-body">Butter slowly simmered until water evaporates and milk solids are removed. Pure golden butterfat. Smoke point ~485°F — one of the highest of any natural fat. Identical fat-soluble vitamin profile to butter, concentrated; completely lactose and casein free. Ideal for high-heat cooking, searing, and roasting. Fourth & Heart and Tin Star Foods make excellent store-bought versions, or make your own from grass-fed butter in 20 minutes.</div></div>
    <div class="tier-card"><div class="tier-header regen">Tallow — Rendered Beef Fat</div><div class="tier-body">Traditionally one of the most prized cooking fats in human history. Rich in fat-soluble vitamins A, D, E, and K; high in oleic acid (same monounsaturated fat in olive oil); contains CLA from grass-fed sources; smoke point ~420°F. Exceptional for roasting potatoes, high-heat cooking, and pie crusts. Fatworks and Epic make excellent shelf-stable options. Source grass-fed whenever possible.</div></div>
    <div class="tier-card"><div class="tier-header regen">Extra Virgin Olive Oil — Raw and Low Heat</div><div class="tier-body">One of the most researched foods on the planet. Rich in oleocanthal (anti-inflammatory properties comparable to ibuprofen at high doses); high in antioxidant polyphenols. Smoke point ~375°F for high-quality EVOO. Best for raw applications (dressings, drizzling), low to medium heat cooking. Look for single-origin, cold-pressed with a harvest date on the label. California Olive Ranch, Kosterina, and Brightland are reliable. The best EVOO tastes grassy, peppery, and slightly bitter — that bitterness is the polyphenols.</div></div>
    <div class="tier-card"><div class="tier-header regen">Avocado Oil — Neutral High Heat</div><div class="tier-body">Smoke point ~520°F for refined — one of the highest available. Mild flavor. Very high in oleic acid (~70%), rich in fat-soluble vitamins E and K, contains lutein. The most versatile high-heat cooking oil in this list. Chosen Foods and Primal Kitchen are among the more reliable brands — a 2020 UC Davis study found many avocado oils on the market were rancid or adulterated before their expiration date.</div></div>
    <div class="tier-card"><div class="tier-header org">Coconut Oil — Medium Heat and Baking</div><div class="tier-body">~90% saturated fat — highly stable. Rich in MCTs, particularly lauric acid, which has antimicrobial, antiviral, and antifungal properties. Smoke point ~350°F for unrefined virgin. Excellent in baking (adds subtle sweetness and moisture), dairy-free recipes, and Southeast Asian cooking. Always choose unrefined, virgin — refining strips the beneficial compounds. Nutiva is reliable.</div></div>
    <div class="tier-card"><div class="tier-header conv">Lard — Traditional and Underrated</div><div class="tier-body">From pasture-raised pigs, surprisingly high in monounsaturated oleic acid (~45%); one of the richest food sources of vitamin D (particularly from pigs raised outdoors in sunlight). Smoke point ~370°F. Produces the most tender, flaky pie crusts and biscuits of any fat — used exclusively in serious baking for generations. Fatworks makes a pasture-raised lard that is widely available.</div></div>
    <div class="ch-section-title">Seed Oils — The Full Picture</div>
    <div class="ch-prose"><p>Seed oils (soybean, canola, corn, sunflower, safflower, grapeseed, cottonseed) are not traditional foods. Humans have consumed olive oil and coconut oil for millennia — soybean oil, canola oil, and corn oil are entirely industrial creations that did not exist in the food supply before the 20th century.</p></div>
    <div class="tier-card"><div class="tier-header conv">How Seed Oils Are Made</div><div class="tier-body">Seeds are heated to high temperatures (120–200°F), mechanically pressed, then flooded with hexane (a component of gasoline) to extract remaining oil. The hexane-oil mixture is heated again to evaporate the solvent. The crude oil is then degummed (treated with phosphoric acid), refined (treated with sodium hydroxide / lye), bleached (filtered through bleaching clays), and deodorized (steamed at 450–500°F). The deodorization step — heating to 450–500°F — converts some polyunsaturated fatty acids into trans fats that are not required to be disclosed on nutrition labels. The result is a chemically degraded product being sold as food.</div></div>
    <div class="tier-card"><div class="tier-header conv">The Omega-6 Problem</div><div class="tier-body">Seed oils are extraordinarily high in omega-6 linoleic acid. Historically, humans consumed omega-6 to omega-3 in roughly a 1:1 to 4:1 ratio. The modern industrial diet has pushed that ratio to 15:1–20:1 in favor of omega-6. Chronic elevation of omega-6 relative to omega-3 is associated with increased systemic inflammation — which underlies many of the chronic diseases most common in the developed world. Research has shown linoleic acid stored in body fat has increased from ~9% in 1959 to over 21% today, tracking almost exactly with the rise in seed oil consumption.</div></div>
    <div class="callout"><div class="callout-text">Seed oils are hidden in virtually every processed food — crackers, chips, salad dressings, mayonnaise, sauces, frozen meals, granola bars, protein bars, baby food, restaurant food, and nearly all commercially baked goods. Reading labels reveals them everywhere.</div></div>`
  },
  { id:'sweeteners', emoji:'🍯', name:'Sweeteners', desc:'Whole food sweeteners ranked, the ones to avoid, and why agave is not your friend',
    heroColor:'#f0dca8', heroEmoji:'🍯', heroTagline:'Sugar Is Sugar — But Not All Sugar Is Equal',
    content:`
    <div class="ch-prose">
      <p>Sugar is sugar. Even the whole food sweeteners in this chapter are still sugar — they raise blood glucose, provide calories, and should be used with intention. This is not a chapter that will tell you honey is a superfood you can eat freely. It is a chapter about understanding the meaningful differences between sweeteners — the ones that retain something of their original nutritional identity versus the ones that are purely refined, industrial, or chemically manufactured.</p>
      <p>The average American consumes approximately 17 teaspoons of added sugar per day — more than three times the amount the American Heart Association recommends for women. Much of this is hidden in processed foods, sauces, breads, condiments, and beverages. In a whole foods kitchen, sweeteners are used deliberately, in foods you make yourself.</p>
    </div>
    <div class="callout"><div class="callout-text">The whole food sweetener principle: choose sweeteners that retain something of their original nutritional identity. Use them deliberately. Use them sparingly. Make them count.</div></div>
    <div class="ch-section-title">Whole Food Sweeteners We Use</div>
    <div class="tier-card"><div class="tier-header regen">Panela / Rapadura / Sucanat — Whole Cane Sugar</div><div class="tier-body">Dehydrated whole cane juice in which the molasses has never been separated. The most minimally processed granulated cane sweetener — essentially the opposite of white sugar. Retains the full mineral profile of sugarcane: iron, calcium, magnesium, potassium, phosphorus, and B vitamins. GI ~65 — similar to white sugar in glycemic index, but the retained minerals and molasses alter metabolism slightly. 1:1 substitute for white or brown sugar with a richer, more caramel-like flavor.</div></div>
    <div class="tier-card"><div class="tier-header regen">Raw Honey — Local & Unfiltered</div><div class="tier-body">Over 180 bioactive compounds including enzymes (diastase, invertase), antioxidants (flavonoids, phenolic acids), antimicrobial compounds, trace minerals (potassium, calcium, magnesium, iron), B vitamins, and amino acids. GI ~58. Raw honey looks different — it may be cloudy, crystallized, or opaque — and it is a fundamentally different food from commercially heated honey.<br><br>Buy local and raw whenever possible. Local honey from regional flowers may support seasonal allergy resilience through pollen exposure. Crystallized honey is a sign it hasn't been heated — warm gently in water to reliquefy. Do not give to infants under 12 months.<br><br>Baking conversion: use ¾ cup honey per 1 cup white sugar, reduce other liquids by ¼ cup, reduce oven temp 25°F.</div></div>
    <div class="tier-card"><div class="tier-header regen">Pure Maple Syrup — Grade A Dark Robust</div><div class="tier-body">Over 67 identified antioxidant compounds; significant source of manganese (~33% daily needs per tablespoon); good source of zinc, riboflavin, calcium, potassium, and magnesium; lower fructose than honey (~40% fructose vs 50% in table sugar). GI ~54. Grade A Dark Robust has the deepest flavor and highest antioxidant content — the grade used throughout this book.<br><br>Baking conversion: 1:1 for white sugar, reduce other liquids by 3 tbsp per cup, reduce oven temp slightly.</div></div>
    <div class="tier-card"><div class="tier-header regen">Coconut Sugar</div><div class="tier-body">Made from coconut palm sap — evaporated at low temperatures. Retains inulin fiber (a prebiotic that slows glucose absorption and feeds beneficial gut bacteria), potassium, magnesium, zinc, and iron. GI ~35 — significantly lower than white sugar (GI ~65), largely due to inulin content. Caramel-like flavor. The most seamless 1:1 swap for refined sugar in conventional recipes. What I keep on the counter for everyday use.</div></div>
    <div class="tier-card"><div class="tier-header regen">Medjool Dates & Date Paste</div><div class="tier-body">A whole fruit — not an extract. Provides sweetness along with fiber (which significantly slows glucose absorption), potassium, magnesium, copper, manganese, and antioxidants (flavonoids, carotenoids, phenolic acid). GI ~42 for whole dates. To make date paste: soak 1 cup Medjool dates in warm water 30 minutes, drain, blend with 2–3 tbsp soaking liquid until smooth. Use 1:1 in place of sugar in no-bake and raw recipes.</div></div>
    
    <div class="tier-card"><div class="tier-header regen">Blackstrap Molasses — The Mineral Powerhouse</div><div class="tier-body">What remains after sucrose is crystallized out of sugarcane three times — the concentrated mineral residue. One of the richest food sources of iron (~20% daily needs per tablespoon), excellent source of calcium, magnesium, potassium, manganese, and B6. Use in gingerbread, dark breads, BBQ sauces, and marinades — or stir a tablespoon into morning oatmeal with maple syrup for one of the most mineral-dense breakfasts you can make. Use unsulfured.</div></div>
    <div class="ch-section-title">Sweeteners to Avoid</div>
    <div class="tier-card"><div class="tier-header conv">Sugar Alcohols — Erythritol, Xylitol, Sorbitol</div><div class="tier-body">Marketed as “natural” zero-calorie sweeteners but heavily processed from corn or birch. Erythritol has been linked in recent research to increased platelet aggregation and elevated cardiovascular risk. Sugar alcohols frequently cause digestive distress — bloating, cramping, and loose stools. Not a neutral swap.</div></div>
    <div class="tier-card"><div class="tier-header conv">White/Refined Sugar, HFCS, Agave</div><div class="tier-body">White sugar: stripped of all minerals and molasses, pure sucrose, often bleached. HFCS: industrially produced from GMO corn, higher fructose than table sugar, linked to fatty liver disease and insulin resistance. Agave: marketed as natural and low-glycemic, but 70–90% fructose — higher than HFCS. Fructose is metabolized exclusively by the liver; chronic high intake is associated with non-alcoholic fatty liver disease, insulin resistance, and elevated triglycerides. Despite the marketing, agave is not a health food.</div></div>
    <div class="tier-card"><div class="tier-header conv">Artificial Sweeteners</div><div class="tier-body">Aspartame (Equal, NutraSweet): broken down into methanol and aspartic acid; classified as possibly carcinogenic by WHO in 2023. Sucralose (Splenda): chlorinated sugar molecule; research suggests it may alter gut microbiome, raise insulin response, and produce harmful compounds when heated. Saccharin (Sweet'N Low): associated with bladder cancer in animal studies; alters gut bacteria. Acesulfame potassium (Ace-K): little long-term safety data. Erythritol: recent research (2023) associated high blood levels with increased cardiovascular risk — avoid products where it is a primary ingredient. Avoid all artificial sweeteners whenever possible.</div></div>`
  },
  { id:'ferm-why', emoji:'🌱', name:'Intro to Fermenting', desc:'The science of fermentation and your beginner roadmap',
    heroColor:'#d4e8d4', heroEmoji:'🌱', heroTagline:'The Gut Health Game-Changer',
    content:`
    <div class="ch-prose">
      <p>The human gut microbiome is a community of approximately 38 trillion microorganisms that performs functions the body cannot do alone: synthesizing vitamins, training the immune system, producing neurotransmitters (including ~90% of the body's serotonin), maintaining the gut lining, and protecting against pathogens. A depleted microbiome is associated with autoimmune conditions, allergies, mood disorders, metabolic dysfunction, and more.</p>
      <p>We stripped fermented foods out of the modern diet — pasteurized the yogurt, vinegar-brined the pickles, switched from sourdough to commercial yeast — and watched rates of the above conditions climb in almost perfect parallel. Fermented foods are how we rebuild.</p>
    </div>
    <div class="tier-card"><div class="tier-header regen">What Fermented Foods Do</div><div class="tier-body">
      <strong>Introduce live beneficial bacteria</strong> — adding to the diversity and population of your gut microbiome.<br><br>
      <strong>Pre-digest your food</strong> — lactic acid bacteria break down complex carbohydrates, proteins, and anti-nutrients like phytic acid into more bioavailable forms. Sourdough bread made with a long ferment is genuinely more digestible than the same bread with commercial yeast.<br><br>
      <strong>Produce beneficial metabolites</strong> — short-chain fatty acids, organic acids, B vitamins, and other compounds that feed the gut lining and reduce inflammation.<br><br>
      <strong>Preserve food naturally</strong> — lactic acid creates an environment where harmful bacteria cannot survive. Sauerkraut lasts months refrigerated. Real sourdough stays fresh longer than commercial bread.
    </div></div>
    <div class="tier-card"><div class="tier-header regen">Your Beginner Roadmap</div><div class="tier-body">
      <strong>Week 1:</strong> Make your first jar of Basic Sauerkraut (two ingredients, no equipment). Start a sourdough starter the same day — feed it daily while the sauerkraut ferments.<br><br>
      <strong>Week 2–3:</strong> Bake your first sourdough loaf once your starter passes the float test. Make a batch of Homemade Yogurt — 30 active minutes, 8 hours of waiting.<br><br>
      <strong>Month 2:</strong> Try lacto-fermented pickles or kimchi. Start a ginger bug if you want homemade sodas.<br><br>
      <strong>Ongoing:</strong> Keep a jar of sauerkraut in the fridge at all times. Feed your starter on a consistent schedule. Fermentation becomes a rhythm — not a project.
    </div></div>
    <div class="callout"><div class="callout-text">The most important thing: just start. Make the sauerkraut. The knowledge comes from doing, not from reading. One jar of cabbage and salt will teach you more than any article.</div></div>
    `
  },
  { id:'ferm-sourdough', emoji:'🍞', name:'Sourdough — Living Bread', desc:'What fermentation does to flour and how to build your starter',
    heroColor:'#ede0cc', heroEmoji:'🍞', heroTagline:'The Bread That Changes How You Bake',
    content:`
    <div class="ch-prose">
      <p>A sourdough starter is a living culture of wild yeasts and lactic acid bacteria captured from your flour and your environment. The fermentation it drives is fundamentally different from commercial yeast bread — in process, flavor, nutrition, and digestibility.</p>
    </div>
    <div class="tier-card"><div class="tier-header regen">What Sourdough Fermentation Does to Flour</div><div class="tier-body">
      <strong>Reduces phytic acid by up to 90%</strong> — phytic acid in whole grains binds minerals like iron, zinc, and magnesium and blocks their absorption. Long acidic fermentation dramatically increases mineral bioavailability.<br><br>
      <strong>Partially pre-digests gluten</strong> — making sourdough more tolerable for many people with wheat sensitivity (not celiac disease).<br><br>
      <strong>Lowers glycemic impact</strong> — organic acids slow starch digestion, producing a lower blood sugar response than the same bread with commercial yeast.<br><br>
      <strong>Natural preservation</strong> — acetic and lactic acids inhibit mold, keeping real sourdough fresh days longer than commercial bread.
    </div></div>
    <div class="tier-card"><div class="tier-header org">Building Your Starter — Day by Day</div><div class="tier-body">
      <strong>Day 1:</strong> Combine 50g freshly milled einkorn (or whole wheat) with 50g filtered room-temperature water in a clean glass jar. Stir vigorously. Cover loosely at room temperature (ideally 75–80°F).<br><br>
      <strong>Days 2–7:</strong> Once daily — discard all but 50g of starter. Add 50g fresh flour and 50g water. Stir well. By days 3–5 you should see reliable bubbling. By day 7–14 it should double within 4–8 hours of a feeding.<br><br>
      <strong>The float test:</strong> Drop a small spoonful in water. If it floats, it's ready to bake with. If it sinks, keep feeding.<br><br>
      <strong>Ongoing:</strong> Room temperature = feed daily. Refrigerator = feed weekly. Always bring to room temperature and feed before baking.
    </div></div>
    <div class="callout"><div class="callout-text">Name your starter. It sounds silly, but naming something you care for makes you more consistent — and consistency is everything with a starter. Ours has a name. It has been with us for years.</div></div>
    <div class="tier-card"><div class="tier-header org">Troubleshooting Your Starter</div><div class="tier-body">
      <strong>Hooch (grey liquid on top):</strong> Your starter is hungry. Pour it off and feed immediately. Not harmful — just means more time between feedings than the starter wants.<br><br>
      <strong>Not rising:</strong> Temperature is likely too cool. Find a warmer spot — top of the refrigerator, inside an oven with just the light on, or near a heat source.<br><br>
      <strong>Smells like acetone or nail polish:</strong> Too warm or too much discard ratio. Adjust temperature and feed more frequently.<br><br>
      <strong>Smells tangy and yeasty:</strong> Perfect. This is what active, healthy starter smells like.
    </div></div>
    `
  },
  { id:'ferm-gingerbug', emoji:'🥂', name:'Ginger Bug & Homemade Sodas', desc:'Wild-fermented probiotic sodas your whole family will love',
    heroColor:'#f0e8d0', heroEmoji:'🫚', heroTagline:'Probiotic Fizz From a Jar of Ginger',
    content:`
    <div class="ch-prose">
      <p>A ginger bug is a wild-fermented starter made from fresh ginger, sugar, and water. Once active, it naturally carbonates homemade sodas and fruit drinks. It is one of the most beginner-friendly ferments and one of the most satisfying — watching fizz form in a simple jar never gets old. The results taste extraordinary and your kids will request them constantly.</p>
    </div>
    <div class="tier-card"><div class="tier-header regen">Making Your Ginger Bug</div><div class="tier-body">
      <strong>You need:</strong> Clean quart mason jar · 2 tbsp freshly grated organic ginger with skin · 2 tbsp raw cane or coconut sugar · 2 cups filtered water (not tap — chlorine kills the culture) · Loose cloth cover.<br><br>
      <strong>Day 1:</strong> Combine all ingredients. Stir well to dissolve sugar. Cover loosely.<br><br>
      <strong>Days 2–5:</strong> Each day, add 1 tbsp freshly grated ginger and 1 tbsp sugar. Stir twice daily. After 3–5 days you should see active bubbling and smell something yeasty, spicy, and slightly tangy.<br><br>
      <strong>Ready when:</strong> It bubbles actively when stirred. A teaspoon dropped in water fizzes slightly.<br><br>
      <strong>Maintenance:</strong> Refrigerate and feed 1–2x per week. Bring to room temperature and feed 24 hours before use.
    </div></div>
    <div class="tier-card"><div class="tier-header regen">Making Homemade Soda</div><div class="tier-body">
      Combine ¼ cup strained ginger bug liquid + 2 cups fresh juice + 1 tbsp honey in a swing-top bottle. Seal and leave at room temperature 1–3 days until carbonated. Refrigerate to stop fermentation. <strong>Open carefully over a sink</strong> — it will be fizzy.<br><br>
      <strong>Favorite combinations in our house:</strong><br>
      • Lemon ginger (fresh lemon juice + honey + ginger bug)<br>
      • Strawberry hibiscus (blended strawberry + hibiscus tea + honey)<br>
      • Pineapple ginger (pineapple juice + extra grated ginger)<br>
      • Blueberry lemon (blended blueberry + lemon + honey)<br><br>
      <em>Use organic ginger only — the wild yeasts live on the skin, and conventionally grown ginger may be treated with fungicides that kill them before fermentation can take hold.</em>
    </div></div>
    `
  },
  { id:'ferm-lacto', emoji:'🥒', name:'Lacto-Fermentation', desc:'Sauerkraut, kimchi, pickles — the complete guide',
    heroColor:'#d4e8d4', heroEmoji:'🥒', heroTagline:'Salt + Vegetables + Time = Living Food',
    content:`
    <div class="ch-prose">
      <p>Lacto-fermentation is the simplest, safest, and most ancient form of food fermentation. Salt draws water out of vegetables through osmosis, creating a brine. In this salty, oxygen-free environment, Lactobacillus bacteria — naturally present on all vegetables — thrive while harmful bacteria cannot survive. The result is a tangy, probiotic-rich food that preserves itself and improves over time.</p>
      <p>No vinegar. No starter culture. No special equipment beyond a clean jar. Just vegetables, salt, time, and the invisible biology that has been keeping humans healthy for thousands of years.</p>
    </div>
    <div class="callout"><div class="callout-text"><strong>Always use non-iodized salt.</strong> Iodine is antimicrobial — it will kill the beneficial bacteria you are trying to cultivate. High quality salt, kosher salt, or pickling salt only. Never iodized table salt.</div></div>
    <div class="tier-card"><div class="tier-header regen">The Salt Ratio — Memorize This</div><div class="tier-body">
      <strong>2% salt by weight</strong> is the standard for most lacto-fermented vegetables.<br><br>
      That means: <strong>20g salt per 1kg of vegetables.</strong><br><br>
      Use a kitchen scale, not measuring cups — salt density varies significantly between types. This one habit gives you consistent, safe, delicious ferments every time.<br><br>
      <strong>For brine</strong> (pickles and vegetables that don't release enough liquid):<br>
      1 tsp high quality salt dissolved in 1 cup filtered water ≈ 2% brine.
    </div></div>
    <div class="tier-card"><div class="tier-header org">The Most Important Rule</div><div class="tier-body">
      <strong>Keep vegetables below the brine surface.</strong> Any vegetable exposed to air invites mold. This is the single most important habit in lacto-fermentation.<br><br>
      Solutions: fill a small zip-lock bag with 2% brine and place on top as a weight · use a small jar filled with water that fits inside your mason jar · use a dedicated fermentation weight · press a folded outer cabbage leaf over the top. Check daily for the first week and press down as needed.<br><br>
      The recipes for Basic Sauerkraut, Classic Kimchi, Lacto-Fermented Dill Pickles, Fermented Jalapeños, and more are all in the Ferments recipe section.
    </div></div>
    `
  },
  { id:'ferm-dairy', emoji:'🥛', name:'Cultured Dairy', desc:'Yogurt, kefir, and cultured butter — why homemade is worth it',
    heroColor:'#f0ece4', heroEmoji:'🥛', heroTagline:'Dairy at Its Most Nourishing',
    content:`
    <div class="ch-prose">
      <p>Fermented dairy is dairy at its most digestible and nutritionally potent. The fermentation process partially pre-digests lactose and proteins, making cultured dairy accessible to many people who struggle with fresh milk. And homemade versions are dramatically superior to anything commercial.</p>
    </div>
    <div class="tier-card"><div class="tier-header regen">Homemade Yogurt</div><div class="tier-body">
      Commercial yogurt typically contains 2–7 bacterial strains. Homemade yogurt from a good culture contains far more, is significantly cheaper, and is exactly as thick or thin as you like. The process is simple: heat milk to 180°F, cool to 110°F, whisk in 2 tbsp live-culture yogurt as starter, incubate 8–12 hours in a warm spot (oven with light on, yogurt maker, or wrapped in towels).<br><br>
      <strong>The key temperature:</strong> above 115°F kills the culture. Use a thermometer until you can judge it reliably. 110°F feels warm but not hot on your wrist.<br><br>
      Full recipe in the Ferments section.
    </div></div>
    <div class="tier-card"><div class="tier-header regen">Milk Kefir</div><div class="tier-body">
      Kefir grains are a symbiotic culture of bacteria and yeasts — not the same as yogurt cultures. Kefir contains 30–50 bacterial and yeast strains vs. 2–7 in most commercial yogurts, making it one of the most probiotic-diverse foods available. The fermentation consumes most of the lactose, making kefir well-tolerated by many lactose-intolerant individuals.<br><br>
      Made by placing kefir grains in whole milk, covering loosely, and leaving at room temperature 24–48 hours. Strain, drink, and immediately start your next batch. The grains grow over time — share them with friends.<br><br>
      Full recipe in the Ferments section.
    </div></div>
    <div class="tier-card"><div class="tier-header regen">Cultured Butter</div><div class="tier-body">
      Cultured butter is made by fermenting cream before churning — the result is richer, more complex, and slightly tangy in a way that regular butter is not. It is how butter was traditionally made before refrigeration standardized the process away from the cultured version.<br><br>
      Combine 2 cups heavy cream with 2 tbsp plain live-culture yogurt. Leave loosely covered at room temperature 12–24 hours until slightly thickened and tangy. Beat in a stand mixer on high speed until the fat breaks from the liquid — about 5–8 minutes. Drain the buttermilk (save it for baking), knead the butter under cold water until the water runs clear, add salt, shape and wrap.<br><br>
      Full recipe in the Ferments section.
    </div></div>
    `
  },
  { id:'ferm-faq', emoji:'❓', name:'Fermentation FAQs', desc:'Is it safe? What is that white stuff? How long does it last?',
    heroColor:'#e8e4f0', heroEmoji:'❓', heroTagline:'Everything You Were Afraid to Ask',
    content:`
    <div class="tier-card"><div class="tier-header org">Is it safe? How do I know if it's gone bad?</div><div class="tier-body">
      Lacto-fermentation is one of the safest food preservation methods known. The lactic acid environment is inhospitable to pathogens. But here is what to watch for:<br><br>
      <strong>White film on top (kahm yeast):</strong> Flat, sometimes wrinkled. Harmless. Skim it off and continue.<br>
      <strong>Fuzzy colored mold (pink, black, green, blue):</strong> Discard. Air contamination.<br>
      <strong>Bad smell:</strong> Fermented vegetables smell tangy, funky, sour — like good pickles. Not putrid like rotting garbage. Trust your nose completely.<br>
      <strong>Bubbling:</strong> Good sign. Active fermentation produces CO2.
    </div></div>
    <div class="tier-card"><div class="tier-header org">How long do fermented foods last?</div><div class="tier-body">
      Refrigerated lacto-fermented vegetables: <strong>6+ months.</strong> Flavor deepens over time.<br>
      Sourdough starter: <strong>indefinitely</strong> with regular feeding. Some starters are over 100 years old.<br>
      Homemade yogurt: <strong>2–3 weeks</strong> refrigerated.<br>
      Milk kefir: <strong>2–3 weeks</strong> refrigerated.<br>
      Ginger bug: <strong>indefinitely</strong> with regular feeding.<br>
      Kombucha / Jun Tea: <strong>1–3 months</strong> refrigerated after second ferment.
    </div></div>
    <div class="tier-card"><div class="tier-header org">Temperature — what if my kitchen is too warm or cool?</div><div class="tier-body">
      Most lacto-ferments work best between 65–75°F. Warmer = faster fermentation. Cooler = slower but often more complex flavor. Below 60°F fermentation slows dramatically. Above 80°F it speeds up and can become overly sour quickly.<br><br>
      <strong>Practical tips:</strong> A pantry shelf away from direct sun works well in most seasons. Top of the refrigerator is warmer. A turned-off oven with just the light on runs ~100°F — good for yogurt incubation, too warm for vegetable ferments.
    </div></div>
    <div class="tier-card"><div class="tier-header org">Do I need special equipment?</div><div class="tier-body">
      <strong>For sauerkraut, kimchi, and pickles:</strong> wide-mouth quart mason jars, a kitchen scale, non-iodized salt. That is genuinely all you need to start.<br><br>
      <strong>Nice-to-haves:</strong> fermentation weights (glass or ceramic), airlock lids, a canning funnel, a wooden kraut pounder.<br><br>
      <strong>For sourdough:</strong> a Dutch oven for baking is the most important piece of equipment — it creates the steam environment that gives sourdough its crust. A banneton (proofing basket) and a lame or sharp knife for scoring are also useful.<br><br>
      None of the above are required for your first ferments. Start with what you have.
    </div></div>
    `
  },
  { id:'legal', emoji:'📋', name:'Legal & Info', desc:'Disclaimers, privacy policy, affiliate disclosure, and contact',
    heroColor:'var(--tan)', heroEmoji:'📋', heroTagline:'From Soil to Soul — Swaps Made Simple LLC',
    content:`
    <div class="ch-section-title">Copyright</div>
    <div class="ch-prose"><p>© 2026 Swaps Made Simple LLC. All rights reserved. This app and all its contents — recipes, educational content, text, and design — are the intellectual property of Swaps Made Simple LLC. You may not reproduce, distribute, modify, or sell any portion of this content without written permission.</p></div>

    <div class="ch-section-title">Health Disclaimer</div>
    <div class="ch-prose"><p>The information in this app is provided for educational and informational purposes only. It is not intended as medical advice, diagnosis, or treatment. Taylor Rourke is not a doctor, registered dietitian, or licensed medical professional.</p>
    <p>Always consult your physician or qualified healthcare provider before making significant changes to your diet, especially if you have a medical condition, are pregnant or nursing, or are managing a chronic illness. Individual results vary. The experiences shared in this app reflect one family's journey and should not be interpreted as a guarantee of any outcome.</p></div>

    <div class="ch-section-title">Affiliate Disclosure</div>
    <div class="ch-prose"><p>This app contains affiliate links. When you purchase through certain links, Swaps Made Simple LLC may earn a small commission at no additional cost to you.</p>
    <p>We only recommend products we personally use and genuinely believe in. Affiliate relationships never influence which products are featured or how they are described. Every recommendation in this app reflects real personal experience.</p></div>

    <div class="ch-section-title">Privacy Policy</div>
    <div class="ch-prose"><p><strong>What we collect:</strong> Nothing. This app stores all data — your meal plan, favorites, shopping list, and prep items — locally on your device only. No data is transmitted to any server. No analytics, no tracking, no personal information is collected or stored by Swaps Made Simple LLC.</p>
    <p><strong>Third-party links:</strong> This app contains links to external websites (affiliate links, GitHub). Those websites have their own privacy policies. We are not responsible for their practices.</p>
    <p><strong>Updates:</strong> This app checks for updates automatically in the background. No personal data is transmitted during this process. The version check fetches only a version string from GitHub, subject to GitHub's standard privacy practices.</p>
    <p>Questions about privacy? Email us at the address below.</p></div>

    <div class="ch-section-title">Contact & Support</div>
    <div class="ch-prose"><p>We'd love to hear from you — whether you have a question, found a bug, or just want to share something you made.</p></div>
    <div style="display:flex;flex-direction:column;gap:10px;margin-top:4px">
      <a href="mailto:taylor@swapsmadesimple.com?subject=Recipe%20Request%20—%20From%20Soil%20to%20Soul&body=Hi%20Taylor!%20I%20would%20love%20to%20see%20a%20recipe%20for%3A%0A%0A" 
         style="display:flex;align-items:center;gap:14px;padding:16px 18px;background:white;border:1.5px solid var(--border);border-radius:12px;text-decoration:none;color:var(--text)">
        <span style="font-size:24px">🍽️</span>
        <div>
          <div style="font-size:14px;font-weight:500;color:var(--text)">Request a Recipe</div>
          <div style="font-size:12px;color:var(--text-light);margin-top:2px">Have something you'd love to see in a future update?</div>
        </div>
        <span style="margin-left:auto;color:var(--text-light);font-size:18px">›</span>
      </a>
      <a href="mailto:taylor@swapsmadesimple.com?subject=App%20Feedback%20—%20From%20Soil%20to%20Soul&body=Hi%20Taylor!%20I%20wanted%20to%20share%20some%20feedback%3A%0A%0A" 
         style="display:flex;align-items:center;gap:14px;padding:16px 18px;background:white;border:1.5px solid var(--border);border-radius:12px;text-decoration:none;color:var(--text)">
        <span style="font-size:24px">💬</span>
        <div>
          <div style="font-size:14px;font-weight:500;color:var(--text)">App Feedback</div>
          <div style="font-size:12px;color:var(--text-light);margin-top:2px">Found a bug or have a suggestion? Let us know.</div>
        </div>
        <span style="margin-left:auto;color:var(--text-light);font-size:18px">›</span>
      </a>
    </div>
    <div class="ch-prose" style="margin-top:20px"><p style="font-size:12px;color:var(--text-light)">taylor@swapsmadesimple.com · swapsmadesimple.com · @toxinfreetay</p></div>
    `
  },

  { id:'seasonal-produce', emoji:'🌿', name:'Seasonal Produce Guide', desc:'What to buy each month for peak flavor and nutrition',
    heroColor:'#d4e8d4', heroEmoji:'🌿', heroTagline:'Eat With the Season',
    content:`
    <div class="ch-prose">
      <p>Eating seasonally is one of the most impactful whole foods habit
    <img src="./assets/june-seasonal-produce.png" alt="June seasonal produce" style="width:100%;border-radius:18px;margin:8px 0 18px;display:block;box-shadow:0 2px 12px rgba(0,0,0,0.08)">
s you can build — and one of the least complicated. You don't need a special diet, a new appliance, or a hundred-dollar supplement. You need to buy what's ripe right now, as close to where you live as possible.</p>
      <p><strong>The nutrient density argument.</strong> Produce begins losing nutritional value the moment it's harvested. Vitamin C degrades within days. Folate, B vitamins, and antioxidant polyphenols decline with exposure to light, heat, and time. A spinach leaf picked yesterday at a farm 20 miles away has measurably more nutrients than the same spinach that was harvested in Mexico, chilled, trucked across the country, and sat in a distribution center for a week before reaching your grocery store. A 2004 study in the Journal of the American College of Nutrition found that nutrient levels in conventionally grown crops had declined significantly since 1950 — partly due to soil depletion, partly due to varieties selected for yield and shelf life rather than nutrition.</p>
      <p><strong>The flavor argument.</strong> Industrial produce is bred for durability and appearance — the ability to survive a 2,000-mile journey and still look photogenic on a shelf. Not for flavor. Not for nutrition. A tomato ripened on the vine and eaten the same day has nothing in common with a gas-ripened tomato that was picked green and shipped from overseas. Flavor is not separate from nutrition — it's often a signal of phytonutrient density. The compounds that make an heirloom tomato taste deeply, complexly like a tomato are the same compounds that make it good for you.</p>
      <p><strong>The cost argument.</strong> Seasonal produce is almost always cheaper. When something is in peak supply locally, prices drop. A flat of berries or peaches at a June farmers market costs far less than out-of-season fruit in January. Buying in-season and in quantity — then freezing, fermenting, or preserving what you can't use immediately — is one of the highest-leverage strategies in whole foods cooking on a budget.</p>
      <p><strong>The ecosystem argument.</strong> Eating seasonally means supporting farms that operate in alignment with natural growing cycles rather than manipulating them with artificial inputs. It shortens your food supply chain, reduces the energy cost of refrigerated long-haul transport, and keeps money in your regional food economy. A farmers market purchase often means the farmer keeps 80–90 cents of your dollar vs. 10–20 cents through a conventional grocery chain.</p>
      <p>You don't have to eat perfectly seasonally to benefit. Simply orienting your shopping toward what's in season in your region — especially for the high-pesticide crops — is enough to meaningfully change the quality of what ends up on your plate.</p>
    </div>

    <div class="ch-section-title" style="font-size:18px;margin-top:8px">🌞 June — What's in Season Now</div>
    
    <div class="tier-card"><div class="tier-header regen">🍑 Apricots</div><div class="tier-body">Beta-carotene, potassium, vitamin C — support skin elasticity, UV protection, and immune defense. One of the richest fruit sources of provitamin A precursors important for epithelial and hormonal health as sun exposure increases.</div></div>
    <div class="tier-card"><div class="tier-header regen">🍇 Raspberries</div><div class="tier-body">Fiber, manganese, folate — high insoluble fiber content supports blood sugar regulation, hormonal metabolism, and gut motility. Ellagitannins provide potent antioxidant activity at the cellular level.</div></div>
    <div class="tier-card"><div class="tier-header regen">🌿 Basil</div><div class="tier-body">Eugenol, magnesium, vitamin K — eugenol is a well-studied anti-inflammatory compound that supports COX-2 pathway regulation, digestive ease, and antimicrobial activity in the gut. Vitamin K supports bone metabolism and healthy clotting function.</div></div>
    <div class="tier-card"><div class="tier-header regen">🍒 Cherries</div><div class="tier-body">Anthocyanins, naturally occurring melatonin, potassium — anthocyanins support inflammatory regulation, vascular health, and uric acid clearance. Cherries contain naturally occurring melatonin, which may support healthy sleep cycles as part of an overall wind-down routine.</div></div>
    <div class="tier-card"><div class="tier-header regen">☀️ Summer Squash</div><div class="tier-body">Lutein, zeaxanthin, manganese — high water content supports hydration and electrolyte balance. Carotenoids are essential for ocular health and skin protection during peak summer sun exposure.</div></div>
    <div class="tier-card"><div class="tier-header regen">🍆 Eggplant</div><div class="tier-body">Nasunin, chlorogenic acid, fiber — nasunin is a rare anthocyanin concentrated in the skin that supports brain cell membrane integrity and antioxidant protection. Chlorogenic acid supports blood sugar balance and liver enzyme function.</div></div>
    <div class="tier-card"><div class="tier-header regen">🥬 Swiss Chard</div><div class="tier-body">Magnesium, vitamin K, betalains — support bone metabolism, blood sugar regulation, and liver detoxification pathways. The rainbow stems contain unique antioxidant pigments that support cellular protection.</div></div>
    <div class="tier-card"><div class="tier-header regen">🫐 Blackberries</div><div class="tier-body">Ellagic acid, vitamin K, fiber — support digestive health and estrogen metabolism, and offer incredible antioxidant density with a lower glycemic load than most summer fruits.</div></div>
    <div class="tier-card"><div class="tier-header regen">🍉 Watermelon</div><div class="tier-body">Lycopene, citrulline, potassium — lycopene provides powerful UV-protective antioxidant activity. Citrulline supports nitric oxide production for healthy circulation and muscle recovery. Naturally hydrating at 92% water.</div></div>
    <div class="tier-card"><div class="tier-header regen">🥒 Cucumber</div><div class="tier-body">Silica, cucurbitacins, potassium — the ultimate internal hydrator. Silica supports connective tissue and skin elasticity, while potassium supports kidney filtration and electrolyte balance in the heat.</div></div>
    <div class="tier-card"><div class="tier-header regen">🫐 Blueberries</div><div class="tier-body">Anthocyanins, pterostilbene, vitamin C — among the most studied berries for cognitive protection and cellular longevity. Support brain health, antioxidant defenses, and healthy inflammatory signaling at the cellular level.</div></div>
    <div class="tier-card"><div class="tier-header regen">🍓 Strawberries</div><div class="tier-body">Vitamin C, ellagic acid, anthocyanins — support immune defense, skin collagen synthesis, and antioxidant protection. Ellagic acid supports estrogen metabolism and provides anti-inflammatory activity at the cellular level.</div></div>
    <div class="tier-card"><div class="tier-header regen">🍑 Peaches</div><div class="tier-body">Beta-carotene, potassium, vitamin C — support skin elasticity and UV protection as sun exposure peaks. Potassium supports adrenal function and electrolyte balance during warmer months.</div></div>
    <div class="tier-card"><div class="tier-header regen">🫛 Green Beans</div><div class="tier-body">Chlorophyll, silicon, vitamin K — support bone mineral density and liver detoxification. Prebiotic fiber feeds beneficial gut bacteria, and the chlorophyll content supports natural internal cleansing processes.</div></div>

    <div class="callout"><div class="callout-text"><strong>June strategy:</strong> Build meals around quick-cooking produce, juicy fruit, basil, and grill-friendly proteins. Batch wash berries, prep cucumbers and herbs, and keep one cooked grain or pasta ready for low-effort summer bowls.</div></div>
`
  },
  { id:'sourdough-troubleshooting', emoji:'🍞', name:'Sourdough Troubleshooting', desc:'Every problem, every fix',
    heroColor:'#ede0cc', heroEmoji:'🍞', heroTagline:'Fix It Before You Throw It Out',
    content:`
    <div class="ch-prose"><p>Sourdough has a learning curve. Every problem has a cause and every cause has a fix.</p></div>
    <div class="ch-section-title">Starter Problems</div>
    <div class="tier-card"><div class="tier-header org">My starter is not rising</div><div class="tier-body"><strong>Causes:</strong> Too cold · Chlorinated water · Too young (under 7 days) · Wrong flour<br><br><strong>Fix:</strong> Move to 75–80°F. Use filtered water. If under 7 days, keep feeding. Use whole grain einkorn or whole wheat flour.</div></div>
    <div class="tier-card"><div class="tier-header org">Liquid on top (hooch)</div><div class="tier-body">Grey or clear liquid means the starter is hungry. Completely harmless.<br><br><strong>Fix:</strong> Pour off and feed immediately. Feed more frequently or increase your flour ratio.</div></div>
    <div class="tier-card"><div class="tier-header org">Smells like nail polish remover</div><div class="tier-body">High acidity — starter is hungry and producing too much acetic acid.<br><br><strong>Fix:</strong> Feed more frequently. Discard more, feed more. Warmer environment shifts toward milder flavor.</div></div>
    <div class="ch-section-title">Bread Problems</div>
    <div class="tier-card"><div class="tier-header org">Loaf is dense and does not rise</div><div class="tier-body"><strong>Causes:</strong> Starter not active enough · Over or under-fermented · Too much flour · Wrong oven temp<br><br><strong>Fix:</strong> Only bake when starter has doubled after feeding. For einkorn — it ferments faster. Watch for a puffy, airy dough, not just a set time.</div></div>
    <div class="tier-card"><div class="tier-header org">Loaf is gummy inside</div><div class="tier-body"><strong>Cause:</strong> Cut too soon. Almost always.<br><br><strong>Fix:</strong> Cool on a wire rack minimum 1 hour — ideally 2 hours — before slicing.</div></div>
    <div class="tier-card"><div class="tier-header org">Einkorn bread is dense but not gummy</div><div class="tier-body"><strong>Cause:</strong> Over-kneaded. Einkorn gluten is fragile and breaks down.<br><br><strong>Fix:</strong> Use stretch-and-fold instead of active kneading. Stand mixer on low, stop at 2–3 minutes maximum.</div></div>
    <div class="tier-card"><div class="tier-header org">Crust is too hard</div><div class="tier-body"><strong>Fix:</strong> After removing from oven, wrap loosely in a clean kitchen towel immediately. The steam softens the crust as it cools.</div></div>
    <div class="tier-card"><div class="tier-header org">No open crumb</div><div class="tier-body">Open crumb requires: strong active starter · high hydration · proper shaping · steam during baking.<br><br><strong>Most important fix:</strong> Fully preheat the Dutch oven. Oven spring happens in the first 10 minutes — it needs immediate intense heat.</div></div>
    `
  },
  {
    id:'sourcing-shopmy', emoji:'🛍️', name:'Taylor\'s Favorite Finds', desc:'Kitchen tools, baking gear, and whole foods staples Taylor actually uses.',
    heroColor:'var(--tan)', heroEmoji:'🛍️', heroTagline:'Tools + ingredients Taylor actually uses',
    content:`
    <div class="ch-prose"><p>These are the tools and products I reach for every single week. Everything here has been tested in my own kitchen and genuinely earned its spot. No fluff, no fillers — just the things that make whole foods cooking faster, easier, and more enjoyable.</p></div>

    <div class="callout"><div class="callout-title">🛍️ Browse My Full ShopMy Collection</div><div class="callout-text">I've organized everything by category — grain mills, fermentation supplies, baking gear, pantry staples, and more. Tap the link below to shop directly.</div></div>

    <a href="https://shopmy.us/collections/4491729" target="_blank" style="display:flex;align-items:center;justify-content:space-between;margin:16px 0;padding:18px 20px;background:var(--green);color:white;border-radius:14px;text-decoration:none;font-family:'Jost',sans-serif">
      <div>
        <div style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase;margin-bottom:4px">Shop Taylor's Favorites</div>
        <div style="font-size:12px;opacity:0.85">Grain mills · fermentation · baking gear · pantry staples</div>
      </div>
      <span style="font-size:20px;margin-left:12px">→</span>
    </a>
    `
  },
  {
    id:'sourcing-azure', emoji:'📦', name:'Buying in Bulk: Azure Standard', desc:'How to order whole foods staples in bulk and why it changes everything.',
    heroColor:'var(--green)', heroEmoji:'📦', heroTagline:'Whole foods in bulk, delivered to your door',
    content:`
    <div class="ch-prose"><p>Azure Standard is a bulk ordering co-op that delivers organic, non-GMO whole foods directly to drop points across the country. It\'s where I source the majority of my dry goods — grains, flours, legumes, oils, sweeteners, and pantry staples — at prices that actually make sense when you\'re cooking from scratch every day.</p>
    <p>Once you start buying in bulk, you realize how much you were overpaying at the grocery store. A 25-pound bag of organic oats from Azure costs less per ounce than a small canister from the grocery store. The same goes for almost everything.</p></div>

    <div class="callout"><div class="callout-title">📦 Browse Taylor\'s Azure Favorites List</div><div class="callout-text">I\'ve saved everything I regularly order in one place. Einkorn berries, oats, lentils, panela, raw honey, quality oils, raw grass-fed cheese, and more.</div></div>

    <a href="https://www.azurestandard.com/shop/lists/nmo5nmopyn" target="_blank" style="display:block;margin:16px 0;padding:16px 18px;background:var(--green);color:white;border-radius:12px;text-decoration:none;text-align:center;font-family:'Jost',sans-serif;font-size:13px;font-weight:500;letter-spacing:1px;text-transform:uppercase">View Taylor\'s Azure List →</a>

    <div class="callout" style="background:#f0ede8"><div class="callout-text">New to Azure? Use code <strong>TaylorRourke1</strong> when you sign up. Orders are delivered to local drop points — find yours on their website.</div></div>

    <div class="ch-section-title">What I Order From Azure</div>
    <div class="tier-card"><div class="tier-header regen">🌾 Grains & Flours</div><div class="tier-body">Einkorn berries, oat groats, rolled oats, and rice. Buying whole grains in bulk and milling as needed keeps everything fresher and costs a fraction of what you\'d pay in a bag.</div></div>
    <div class="tier-card"><div class="tier-header regen">🫘 Legumes</div><div class="tier-body">Dried black beans, pinto beans, lentils, chickpeas, and white beans. Dried legumes are one of the best values in whole foods cooking — cheap, nutritious, and infinitely shelf-stable.</div></div>
    <div class="tier-card"><div class="tier-header regen">🍯 Sweeteners & Oils</div><div class="tier-body">Raw honey, panela, maple syrup, and quality olive oil. These go into almost everything I make — buying in bulk makes the cost much more manageable.</div></div>
    <div class="tier-card"><div class="tier-header regen">🧂 Pantry Staples</div><div class="tier-body">High quality salt, ceylon cinnamon, apple cider vinegar, and more. The ingredients that appear in recipe after recipe.</div></div>
    <div class="tier-card"><div class="tier-header regen">🥥 Baking Supplies</div><div class="tier-body">Coconut oil, grass-fed butter, baking powder, baking soda, and vanilla beans. Stocking these in bulk means you\'re always ready to bake without a grocery run.</div></div>
    <div class="tier-card"><div class="tier-header regen">🧀 Dairy</div><div class="tier-body">Raw grass-fed cheese is one of my favorite Azure finds — hard to source locally but easy to order here. Real raw milk cheese from quality farms, delivered to your drop point.</div></div>

    <div class="ch-section-title" style="margin-top:20px">💡 How to Make Azure Work</div>
    <div class="ch-prose"><p><strong>Find your drop point first.</strong> Azure delivers to local drop points rather than individual homes in most areas. Find yours on their website and check when deliveries come — most are monthly or every few weeks.</p>
    <p><strong>Start with what you use most.</strong> Don\'t try to buy everything at once. Start with 2–3 things you reach for constantly — oats, beans, panela — and build from there as you get a feel for how much you go through.</p>
    <p><strong>Think in months, not weeks.</strong> Bulk buying only saves money if you actually use what you buy. A 25-pound bag of oats sounds like a lot until you realize you make baked oatmeal twice a week.</p></div>
    `
  },
  {
    id:'sourcing-storage', emoji:'🏺', name:'Bulk Storage Setup', desc:'How to store what you buy. The glass jar system that makes a whole foods pantry actually work.',
    heroColor:'var(--mauve)', heroEmoji:'🏺', heroTagline:'The jar system that makes it all work',
    content:`
    <div class="ch-prose"><p>Buying in bulk only works if you have somewhere to put everything. When I started buying in bulk I didn\'t rush out and buy 50 glass jars all at once — I invested slowly, over the course of about a year, adding to my collection as I figured out what I actually needed and in what sizes.</p>
    <p>Now I have a system that works beautifully: large glass jars for bulk quantities stored in the under-the-stairs closet, and smaller glass jars in the pantry for what I\'m actively using that week. Everything is visible, airtight, and labeled.</p></div>

    <div class="ch-section-title">The Two-Tier System</div>
    <div class="tier-card"><div class="tier-header regen">🏠 Under-the-Stairs Closet (or any cool, dark storage)</div><div class="tier-body">This is where the bulk quantities live. Large glass jars and stainless canisters for grains, beans, oats, flours, sugar, and salt. The things that come in 10–25 pound bags get decanted here. I refill from this stash as needed through the week.</div></div>
    <div class="tier-card"><div class="tier-header regen">🏺 Pantry (active use)</div><div class="tier-body">Smaller glass jars — pints and quarts — for what I\'m actively using. Flour for baking, the current oats, this week\'s beans. Within easy reach, always labeled, so the whole family knows where things are.</div></div>

    <div class="ch-section-title">My Favorite Bulk Storage Containers</div>
    <div class="tier-card"><div class="tier-header conv">🥫 Bulk Glass Jars</div><div class="tier-body">Large wide-mouth glass jars for storing grains, beans, flours, oats, and sugar by the pound. Glass keeps everything fresh, you can see exactly what you have, and they last forever.
      <div style="margin-top:12px"><a href="https://amzn.to/4c2hztf" target="_blank" style="display:inline-block;padding:8px 14px;background:var(--mauve);color:white;border-radius:8px;text-decoration:none;font-size:12px;font-weight:500">Shop Bulk Glass Jars →</a></div>
    </div></div>
    <div class="tier-card"><div class="tier-header conv">🥄 Bulk Stainless Steel Canisters</div><div class="tier-body">Stainless steel bulk canisters for the same purpose — completely airtight, nearly indestructible, and great if you prefer a more uniform look in your storage space.
      <div style="margin-top:12px"><a href="https://amzn.to/3PPfqtC" target="_blank" style="display:inline-block;padding:8px 14px;background:var(--mauve);color:white;border-radius:8px;text-decoration:none;font-size:12px;font-weight:500">Shop Bulk Stainless →</a></div>
    </div></div>

    <div class="ch-section-title" style="margin-top:20px">💡 Storage Tips</div>
    <div class="ch-prose">
    <p><strong>Invest slowly.</strong> You don\'t need to buy 50 jars on day one. Start with a dozen pints and quarts and add as you figure out what sizes you actually need. Glass jars are a long-term investment — the ones I bought first are still going strong.</p>
    <p><strong>Label everything.</strong> Masking tape and a permanent marker work perfectly. Include the date you filled it so you know how old things are.</p>
    <p><strong>Cool and dark is key.</strong> Grains and flours keep much longer when stored away from heat and light. A closet, basement, or interior cabinet is ideal. Avoid anywhere near the stove or a sunny window.</p>
    <p><strong>Flour goes in the freezer.</strong> Once milled, einkorn flour is best used within a few days or frozen. The whole berries store for years at room temperature in sealed jars — mill as needed.</p>
    </div>
    `
  },
  { id:'conversion-chart', emoji:'📐', name:'Conversions & Substitutions', desc:'The quick-reference chart you will use every single week',
    heroColor:'var(--tan)', heroEmoji:'📐', heroTagline:'The Chart You Needed Yesterday',
    content:`
    <div class="ch-section-title">Volume Conversions</div>
    <div class="tier-card"><div class="tier-header org">Spoons & Cups</div><div class="tier-body">3 tsp = 1 tbsp<br>4 tbsp = ¼ cup<br>8 tbsp = ½ cup<br>16 tbsp = 1 cup<br>2 cups = 1 pint<br>4 cups = 1 quart</div></div>
    <div class="tier-card"><div class="tier-header org">Metric</div><div class="tier-body">1 tsp = 5ml · 1 tbsp = 15ml<br>¼ cup = 60ml · ½ cup = 120ml<br>1 cup = 240ml<br>1 oz = 28g · 1 lb = 454g</div></div>
    <div class="ch-section-title">Sweetener Swaps</div>
    <div class="tier-card"><div class="tier-header org">Per 1 cup white sugar</div><div class="tier-body">¾ cup honey (reduce liquid 3 tbsp, add ¼ tsp baking soda)<br>¾ cup maple syrup (reduce liquid 3 tbsp)<br>1 cup panela or coconut sugar (1:1 direct swap)</div></div>
    <div class="ch-section-title">Flour Notes</div>
    <div class="tier-card"><div class="tier-header org">All-purpose for freshly milled einkorn</div><div class="tier-body">When a recipe calls for <strong>freshly milled whole einkorn</strong> and you use refined all-purpose instead, go by <strong>weight</strong> first (volume is less reliable once bran is in play). Whole einkorn usually needs a bit more water than AP — <strong>start with about 5–10% less liquid</strong>, then add a spoonful at a time if the mix feels dry. Expect a paler, softer crumb. Do not overmix once hydrated.</div></div>
    <div class="ch-section-title">Fat Swaps</div>
    <div class="tier-card"><div class="tier-header org">Per 1 cup butter</div><div class="tier-body">1 cup ghee (best for high heat)<br>¾ cup coconut oil (solid, for baking)<br>1 cup lard or tallow (excellent for pastry)</div></div>
    <div class="ch-section-title">Dairy Swaps</div>
    <div class="tier-card"><div class="tier-header org">1 cup buttermilk</div><div class="tier-body">1 cup milk + 1 tbsp lemon juice (let sit 5 min)<br>1 cup plain yogurt, thinned<br>1 cup kefir (best substitute)</div></div>
    <div class="ch-section-title">Egg Swaps (per 1 egg)</div>
    <div class="tier-card"><div class="tier-header org">Binding</div><div class="tier-body">1 tbsp ground flax + 3 tbsp water (gel 5 min) — best for muffins<br>¼ cup mashed banana — adds sweetness<br>¼ cup applesauce — neutral flavor</div></div>
    `
  },];

const CATEGORIES = [
  { id:'breads',     label:'Breads & Baked',   emoji:'🌾' },
  { id:'snacks',     label:'Snacks',            emoji:'🍎' },
  { id:'breakfast',  label:'Breakfast',         emoji:'🍳' },
  { id:'meals',      label:'Easy Meals',        emoji:'🍽️' },
  { id:'soups',      label:'Soups & Stews',     emoji:'🍲' },
  { id:'salads',     label:'Salads & Sides',    emoji:'🥗' },
  { id:'desserts',   label:'Desserts',          emoji:'🍓' },
  { id:'condiments', label:'Condiments',        emoji:'🫙' },
  { id:'ferments',   label:'Ferments',          emoji:'🥒' },
  { id:'drinks',     label:'Drinks',            emoji:'🥤' },
  { id:'prep',       label:'Weekly Prep',       emoji:'🫙' },
];
