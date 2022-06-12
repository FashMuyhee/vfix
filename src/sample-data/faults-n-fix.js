const faultNFix = [
  {
    id: 'fnf1', title: 'Noisy engine', fix: [
      {
        type: 'Squealing sound',
        note: 'Is there ever a time that squealing is good, even outside of the automotive realm? If you hear a squeal coming from under the hood, it should cause alarm. Most times, this annoying sound is related to a loose or worn-out serpentine belt. This belt is responsible for controlling all of the engine accessories, such as the alternator and water pump.Because of its importance, you don’t want to ignore the need for a replacement. However, there are other reasons that your car might be squealing.If it’s not coming from the engine area, but rather when you turn, your issue might be in the steering system instead.Or, if you hear squealing when you brake, you might need new brake pads.'
      },
      { type: 'Tapping/Clicking', note: "There’s a distinctive sound that the car engine makes when the oil is low. It resembles a clicking, ticking or tapping noise. Thankfully, this condition is one of the easiest to diagnose; just take a look at the dipstick. You can also resolve the issue easily by adding more oil. However, adding oil is a short-term fix. You still want to figure out why your car is low on oil in the first place.Low oil can be caused by a leak, either internally or externally, as well as conditions where it is being burned up. However, if you check the oil and everything seems fine, you might have a valvetrain problem instead. These are serious concerns that should be looked at right away. " },
      {
        type: 'Knocking Sound', note: "The engine can make a distinct pinging or metallic knocking sound while driving. This condition is known as detonation knock. This occurs when the fuel and air mixture in one of the cylinders is detonating at numerous locations simultaneously.It’s possible that you put the wrong octane fuel into the system, which can cause this problem. However, it can also be caused by a lean air and fuel mixture, poor timing or a damaged knock sensor.All knocking noises need to be dealt with immediately before further engine damage occurs."
      }
    ]
  },
  {
    id: 'fnf2', title: "Dashboard warning lights", fix: [
      { type: 'Warning Light', note: "On your dashboard are a set of lights that immediately inform you in case of any engine trouble. If your engine is overheating, low on fuel, experiencing battery problems, a red light will illuminate on the dashboard. Most modern engines now come with an Engine control unit (ECU) with sensors attached to various engine components.When there is an issue with the car, you will get an error code, which will light up a warning light.", link: 'https://mechanicbase.com/cars/dashboard-symbols-warning-lights', linkTitle: "Click this link to find more about dashboard warning light" }
    ]
  },
  {
    id: 'fnf3', title: "Grinding or Grating sound from the wheel", fix: [
      { type: 'Bad wheel bearings', note: "Grinding or Grating sound from the wheel is one of the most common and most recognizable symptoms associated with bad wheel bearings. You may confuse this with engine noise, but you will probably hear a crunching or grinding sound that becomes louder as the vehicle accelerates if you listen closely. Because wheel bearings are not known to wear so often, the noise is usually mistaken for something else, and the problem is overlooked. Mostly, wheel bearings are made of hardened steel and can withstand high forces. Bearings are usually destroyed by heat and water. Heat is generated when there is little or no lubrication, and water can sometimes permeate the wheel bearing. In most cases, newly manufactured wheel bearings are fully sealed.These seals help to protect the wheel bearing from destructive elements such as water, dirt, etc. However, if this seal is broken, the wheel bearing starts to fail and make noise." }
    ]
  },
  {
    id: 'fnf4', title: "Car feel loose", fix: [
      { type: 'Bad wheel bearings', note: "The wheel’s looseness, also known as wheel play, is another common symptom of a bad wheel bearing. When the bearing becomes spoiled, it begins to get lost inside the wheel hub and wheel spindle, making the vehicle feel loose when steering.You may feel the car is not as stable on the highway as it once was. However, if you can feel this and if a wheel bearing causes it, it has gone terrible, and you have to replace it immediately." }
    ]
  },
  {
    id: 'fnf5', title: "Smoke from the exhaust", fix: [
      { type: 'Bad wheel bearings', note: "A functioning car produces some smoke in terms of exhaust gases, which is often colourless.However, excessive smoke is a signal of serious engine trouble. The color and smell of the smoke will offer clues as to what is wrong.If the smoke is white in color, then it may be your coolant that could be leaking, while if you have thick blue coloured smoke, it could be oil getting into the combustion chambers. If it is black, it can mean that the engine is running too rich in fuel." }
    ]
  },
  {
    id: 'fnf6', title: "Vehicle consumes more fuel or poor fuel efficiency", fix: [
      { type: 'Poorly Serviced Engine', note: "Poorly serviced engines consume more fuel. Mass airflow sensors, fuel filters, air filters, and O2 sensors all contribute to efficient fuel usage.However, with time these components become clogged with dirt forcing them to produce more fuel. Routine servicing of these components will restore your car engine to good working condition." }
    ]
  },
  {
    id: 'fnf8', title: "Car won't start", fix: [
      { type: 'Faulty starter motor', note: "The starter motor and battery work together to crank the engine. However, certain starter components can stop working due to wear and tear. These include the starter relay, solenoid, and motor. When this happens, you will hear a rattling sound whenever you turn on the ignition and start the car. Starter motors are quite expensive and, unfortunately, something that needs to get replaced sometimes. A starter often holds up around 10 years, though, depending on the car model and how often you start the car" },
      { type: 'Bad Car battery', note: "The battery powers the car engine together with the alternator. However, with time the terminals get contaminated with acid, and the battery no longer powers electrical components in the car. Just like your tires, you need to change your battery after every five years or 50,000 miles, whichever comes first. It can be stressful operting with a dead battery because the car can stall at any time. Some of the signs of a dead battery include dim headlights, inability to power the stereo or AC, and problems starting the car in the morning. If the battery is working fine, then the problem could be with the alternator." },
      { type: 'Bad Car battery', note: "The battery powers the car engine together with the alternator. However, with time the terminals get contaminated with acid, and the battery no longer powers electrical components in the car. Just like your tires, you need to change your battery after every five years or 50,000 miles, whichever comes first. It can be stressful operating with a dead battery because the car can stall at any time. Some of the signs of a dead battery include dim headlights, inability to power the stereo or AC, and problems starting the car in the morning. If the battery is working fine, then the problem could be with the alternator." }
    ]
  },
  {
    id: 'fnf10', title: "Overheating", fix: [
      { type: 'Low Coolant or No Coolant', note: "The primary purpose of coolant is to cool down your engine. So, it’s no surprise that if your vehicle is low or out of coolant, your engine will overheat! Just keep in mind that your vehicle has a sealed cooling system, so if you’re constantly adding coolant, you need to figure out where it’s going." },
      { type: 'Broken Thermostat', note: "Your vehicle’s thermostat opens and closes as needed to keep your engine at the right temperature. If it’s stuck open or closed, your engine will overheat, which is a significant problem. The thermostat is usually located in a plastic house somewhere on your engine block or head, check your repair manual to find its location." },
      { type: 'Broken Water Pump', note: "Your vehicle’s water pump pushes the coolant throughout the engine. Without it, your coolant is sitting stagnant and can’t do its job.Keep in mind that while your vehicle’s water pump can break, it’s one of the rarer problems, depending on the car model." },
      { type: 'Broken Fan', note: "If your vehicle only overheats while idling, you should double-check that the fan is working correctly. The fan pushes air over the radiator to keep it cool, which is especially important while your vehicle is idling." },
      { type: 'Clogged or Damaged Radiator', note: "Your vehicle’s coolant flows through the radiator’s fins to cool down, and if those fins are clogged or blocked, you won’t get enough coolant flow through your engine to effectively cool it down. Another problem is if debris blocks the front of your radiator. While this is less common, just make sure that air can easily flow over your radiator while driving" },
      { type: 'Low Oil', note: "This is a very rare issue, but it can absolutely happen! Oil has several properties, but one of the critical ones is cooling. Without enough oil, engine components will create a lot more friction, which heats everything.If it gets too hot, your engine can overheat. If your engine is overheating, take a few extra seconds to check your oil level." }
    ]
  },
  {
    id: 'fnf11', title: "Radiator Fan Is Not Working?", fix: [
      { type: 'Blown Fuse', note: "A fuse supports almost everything electrical in a car. If there is an electrical surge going towards a piece of electronic equipment, the fuse cuts the electric supply to that particular equipment saving it from destruction. This is what we call a blown fuse.A blown fuse is no big deal, and changing one does not cost a lot of money. If your car’s radiator fan is non-functional, check your car’s user manual and locate the fuse for the radiator fan controller or the fan. The fan itself often uses a big fuse of around 50A, while there might also be a separate small fuse to the fan control module. Remember that if the fan fuse is blown – there might be a problem with the wirings or the radiator fan." },
      { type: 'Broken Wiring or Bad connection', note: "If the fan is not working even when the car is overheating, there might be a wiring issue or a bad connection.Check the wirings going to the radiator fan from the control unit or relay. Check in the connector plugs for any signs of corrosion. Also, check the connector plugs at the relay and control unit.Measuring the wirings with a multimeter is often not very effective, as you need to put a load on the wires to see if they are functional. However, as a fast test, you can check with a multimeter if power is coming to the radiator fan." },
      { type: 'Broken Radiator Fan', note: "When your radiator fans are not coming on, it can also be caused by faulty radiator fans. The radiator fans have electrical motors inside of them, which will wear out after some years.You can test the electrical radiator fans by taking a wire from the car battery, unplug the radiator fan connector, and put 12v+ and ground into the connector. This is the fastest and easiest way to test your radiator fans." },

    ]
  },
  {
    id: 'fnf12', title: "Why Is My Steering Wheel Shaking?", fix: [
      { type: 'Bad Front Tires', note: "The most common cause of a shaking steering wheel while driving is, without a doubt, a damaged or unbalanced tire.After installing a tire on the rim – you balance it with weights to make sure that it is perfectly balanced.These weights could come loose after a while and cause a shaking steering wheel if the front tires lost the weights.It can also be caused by damage to your tire. Inspect the front tires for any damages and if you can’t find any – let a tire shop balance them for you.This is the most common cause for both low speeds and high speeds. If it shakes at low speed though, it is more likely a damage to your tire." },
      { type: ' Rim or Wheel hub', note: "Another widespread cause is a damaged rim if you have been in a small accident or are often driving on bumpy roads.Small damages can be repaired on the rim, but you will maybe have to replace the whole rim if it is major damage." },
      { type: 'Wheel alignment', note: "A faulty wheel alignment can actually cause the tires to steer in different directions and therefore starts to bump around and create a shaking steering wheel. This can especially happen if you also have other worn out suspension parts at the same time." },
      { type: 'Control arm bushings', note: "The control arm bushings hold the tires in a fixed position to make sure they won’t start wobble at higher speeds.This can happen especially while you are braking the car if these bushings are worn out." },

    ]
  },
  {
    id: 'fnf13', title: "Squealing Brakes", fix: [
      { type: 'worn-off brake pads', note: "Squealing brakes are unpleasant and way more unsafe. It is primarily caused by worn-off brake pads. Frequent over-speeding means the brakes are used more than usual and hence causes excessive wear of the brake pads.Ignoring squealing brakes is not good, as less responsive brakes can even lead to severe accidents. Hence as soon as you hear your brakes going all high pitched, get your brake pads replaced from your trusted car service partner GoMechanic." },

    ]
  },
  {
    id: 'fnf14', title: "FLat or Dead Battery", fix: [
      { type: 'Needs a jump start or replacement', note: "This usually occurs if you leave your headlights on when your car is not running. Cold weather conditions can also cause a dead battery. To repair a dead battery, you need jumper cables and another car’s battery. If your vehicle’s battery is still effective, then it should turn back on after you jump-start it. If it does not turn on, then you will need to replace it." },

    ]
  },
];

export default faultNFix
