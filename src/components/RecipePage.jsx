import React from 'react'
// import './RecipePage.css'
import mainImage from '../recipe-page-master/photo1.png'
import forkAndSpoon from '../recipe-page-master/fork-and-spoon.svg'
import clockIcon from '../recipe-page-master/clock-1-svgrepo-com.svg'
export default function RecipePage() {
  return (
    <div className='RecipePage'>
      <h1>Classic Cheesecake Recipe</h1>
      <p>Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.</p>
      <img src={mainImage} alt='mainImage' />

      <div className='info-section'>

        <div className='info-section-text'>
          <h2>Ingredients</h2>
          <div className='ingredients'>
            <p>Graham Cracker Crust</p>
            <div><input type='checkbox' /> <p>1 and 1/2 cups (150g) <b>graham cracker crumbs </b>(about 10 full sheet graham crackers)</p></div>
            <div> <input type='checkbox' /> <p>5 Tablespoons (70g) <b>unsalted butter, melted</b></p></div>
            <div> <input type='checkbox' /> <p>1/4 cup (50g)<b> granulated sugar</b></p></div>
            <p>Cheesecake</p>
            <div><input type='checkbox' /> <p>four 8-ounce blocks (904g) full-fat <b>cream cheese</b>, softened to room temperature</p></div>
            <div> <input type='checkbox' /> <p>1 cup (200g) <b>granulated sugar</b></p></div>
            <div><input type='checkbox' /> <p>1 cup (240g) full-fat <b>sour cream</b>, at room temperature</p></div>
            <div> <input type='checkbox' /> <p>1 teaspoon <b>pure vanilla extract</b></p></div>
            <div> <input type='checkbox' /> <p>2 teaspoons <b>fresh lemon juice </b>(optional, but recommended)</p></div>
            <div> <input type='checkbox' /> <p>3 large <b>eggs</b>, at room temperature</p></div>
            <div> <input type='checkbox' /> <p>topping suggestions: salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce (recipe in notes) </p></div>

          </div>

          <div className='instructions'>
            <h2>Instructions</h2>
            <div className='instructions__step'>
              Adjust the oven rack to the lower-middle position and preheat oven to 350°F (177°C).
            </div>
            <div className='instructions__step'>
            <b>Make the crust</b>: Using a food processor, pulse the graham crackers into crumbs. Pour into a medium bowl and stir in sugar and melted butter until combined. (You can also pulse it all together in the food processor.) Mixture will be sandy. Press firmly into the bottom and slightly up the sides of a 9-inch or 10-inch springform pan. No need to grease the pan first. I use the bottom of a measuring cup to pack the crust down tightly. Pre-bake for 8 minutes. Remove from the oven and place the hot pan on a large piece of aluminum foil. The foil will wrap around the pan for the water bath in step 4. Allow crust to slightly cool as you prepare the filling.            </div>
            <div className='instructions__step'>
              <b>Make the crust</b>: Using a food processor, pulse the graham crackers into crumbs. Pour into a medium bowl and stir in sugar and melted butter until combined. (You can also pulse it all together in the food processor.) Mixture will be sandy. Press firmly into the bottom and slightly up the sides of a 9-inch or 10-inch springform pan. No need to grease the pan first. I use the bottom of a measuring cup to pack the crust down tightly. Pre-bake for 8 minutes. Remove from the oven and place the hot pan on a large piece of aluminum foil. The foil will wrap around the pan for the water bath in step 4. Allow crust to slightly cool as you prepare the filling.                </div>
            <div className='instructions__step'>
            <b>Prepare the simple water bath (see note) </b>Boil a pot of water. You need 1 inch of water in your roasting pan for the water bath, so make sure you boil enough. I use an entire kettle of hot water. As the water is heating up, wrap the aluminum foil around the springform pan. Pour the cheesecake batter on top of the crust. Use a rubber spatula or spoon to smooth it into an even layer. Place the pan inside of a large roasting pan. Carefully pour the hot water inside of the pan and place in the oven. (Or you can place the roasting pan in the oven first, then pour the hot water in. Whichever is easier for you.)            </div>
            <div className='instructions__step'>
            Bake cheesecake for 55-70 minutes or until the center is almost set. When it’s done, the center of the cheesecake will slightly wobble if you gently shake the pan. Turn the oven off and open the oven door slightly. Let the cheesecake sit in the oven in the water bath as it cools down for 1 hour. Remove from the oven and water bath, then cool cheesecake completely at room temperature. Then refrigerate the cheesecake for at least 4 hours or overnight.            </div>
            <div className='instructions__step'>
              Use a knife to loosen the chilled cheesecake from the rim of the springform pan, then remove the rim. Using a clean sharp knife, cut into slices for serving. For neat slices, wipe the knife clean and dip into warm water between each slice.
            </div>
            <div className='instructions__step'>
              Serve cheesecake with desired toppings. Cover and store leftover cheesecake in the refrigerator for up to 5 days.              </div>
          </div>




        </div>



        {/* time section */}
        <div className='info-section-time'>
          <div className='info-section-time__item alone'>
            <img src={forkAndSpoon} alt='fork-and-spoon' />
            <div>
              <span>Yields</span>
              <p>12 servings</p>
            </div>
          </div>
          <div className='info-section-time__item'>
            <img src={clockIcon} alt='fork-and-spoon' />
            <div>
              <span>Prep TIme</span>
              <p>45 minutes</p>
            </div>
          </div>
          <div className='info-section-time__item'>
            <img src={clockIcon} alt='fork-and-spoon' />
            <div>
              <span>Cook Time </span>
              <p>1 hour</p>
            </div>
          </div>
          <div className='info-section-time__item'>
            <img src={clockIcon} alt='fork-and-spoon' />
            <div>
              <span>Total Time</span>
              <p>7,75 hours</p>
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}
