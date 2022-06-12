const useTeckInfo = ({ name, rocket, engine, isEngine }) => {
    const header = name.toUpperCase();

    const firstrow = {
        title: isEngine ? "NUMBER" :"HEIGHT"
        , value: isEngine ? engine.number : rocket.height.meters + "m/" + rocket.height.feet + "ft"     
    };
    const secondrow = {
        title: isEngine ? "PROPELLANT1" : "DIAMETER"
        , value: isEngine ? engine.propellant_1 : rocket.diameter.meters + "m/" + rocket.diameter.feet + "ft"
    };
    const thirdrow = {
        title: isEngine ? "PROPELLANT2" : "STAGES",
        value: isEngine ? engine.propellant_2 : rocket.stages
    };
    const fourthrow = {
        title: isEngine ? "THRUST TO WEIGHT" : "CONST PER LAUNCH",
        value: isEngine ? engine.thrust_to_weight : rocket.cost  //rocket.cost
    };
    const body =[firstrow, secondrow, thirdrow, fourthrow];

    const img = `../assets/${name.replace(/\s+/g, '')}.png`;
        return{
        header,
        body,
        img
    }
}
export default useTeckInfo;