import React from 'react';
import Header from '../components/Header';

const Info = () => {
  return (
    <div>
      <Header />
      <h3>House Info</h3>
      <div className="pgph">
        <h4>Check-out Instructions:</h4>
        <div className="pgph">
          <h4>Dishes</h4>
          <div className="pgph">
            {`\u{2022}`} Place all dirty dishes in the dishwasher and start
            cleaning cycle
          </div>

          <h4>Bedsheets</h4>
          <div className="pgph">
            {`\u{2022}`} Strip used linens and leave on top of bed for cleaning
            staff
          </div>

          <h4>Outdoor couch & Hammock</h4>
          <div className="pgph">
            {`\u{2022}`} Place couch pillows and hammocks back in storage bin
            (south porch)
          </div>

          <h4>Hot tub</h4>
          <div className="pgph">
            {`\u{2022}`} Ensure hot tub cover straps are securely closed
          </div>

          <h4>Lock up</h4>
          <div className="pgph">
            {`\u{2022}`} Ensure all exterior doors are locked (lounge/TV room &
            laundry room)
            <br />
            {`\u{2022}`} Lock front door by pressing the "August" logo on keypad
          </div>
        </div>

        <p />
        <h4>Pets</h4>
        <div className="pgph">{`\u{2022}`} There is a strict no-pet policy</div>

        <p />

        <h4>Plumbing (septic)</h4>
        <div className="pgph">
          {`\u{2022}`} Do NOT flush feminine hygiene products down toilets
          <br />
          {`\u{2022}`} Please use trashcans provided in the bathrooms
        </div>

        <p />

        <h4>Trash</h4>
        <div className="pgph">
          {`\u{2022}`} Kitchen: garbage and recycle under the sink (to the
          right)
          <br />
          {`\u{2022}`} Large garbage can in the laundry room
        </div>

        <p />

        <h4>Safety</h4>
        <div className="pgph">
          {`\u{2022}`} Fire extinguisher located in laundry room
          <br />
          {`\u{2022}`} First aid kits are in top-drawers of entry buffet at
          bottom of stairs
        </div>

        <p />

        <h4>Small children</h4>
        <div className="pgph">
          {`\u{2022}`} Pack 'n' play is in the downstairs master bedroom closet
        </div>

        <p />

        <h4>Furnace/Fireplaces</h4>
        <div className="pgph">
          {`\u{2022}`} DO NOT change any setting on the furnace itself
          <br />
          {`\u{2022}`} Set the thermostat in the room,
          <br />
          {`\u{2022}`} Corresponding unit will adjust to temperature.
        </div>

        <p />

        <h4>Operating Showers</h4>
        <div className="pgph">
          {`\u{2022}`} Turn on: move larger handle in either direction
          <br />
          {`\u{2022}`} Colder: Turn smaller center knob clockwise
          <br />
          {`\u{2022}`} Hotter: Turn smaller center knob counter-clockwise
          <div style={{ paddingLeft: '1em' }}>
            {`\u{2022}`} Even Hotter: Push small center knob in (towards wall)
            <br />
            {`\u{2022}`} Continue turning counter-clockwise
          </div>
        </div>

        <p />

        <h4>Radiant heating in bathrooms</h4>
        <div className="pgph">
          {`\u{2022}`} We kindly ask that guests don't turn these on
        </div>

        <p />

        <h4>Cooking</h4>
        <div className="pgph">
          {`\u{2022}`} Stovetop is induction. Use the provided stainless steel
          cookware
        </div>
        <p />

        <h4>Outdoor Couch & Hammocks</h4>
        <div className="pgph">
          {`\u{2022}`} Pillows and hammocks are located in storage bin on south
          porch
          <br />
          {`\u{2022}`} There is a hammock hanging in its case on a tree south
          (water-side) of the house as well
        </div>
      </div>
    </div>
  );
};
export default Info;
