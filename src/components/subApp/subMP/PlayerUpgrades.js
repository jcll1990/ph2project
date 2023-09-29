import React, { useState, useEffect } from "react";



function PlayerUpgrades({
    player,
    storeItems,
}) {

    const [allSwords, setAllSwords] = useState(storeItems.swords) 
    const [allBoots, setAllBoots] = useState(storeItems.boots) 
    const [allArmors, setAllArmors] = useState(storeItems.armors) 



    
    return (

        <div id="equipmentsection">
                <div id ="eqtext">
                <h2>Equiped equipment</h2>
                </div>
                <div id ="equipment">
                    <div id="eqsword">
                    <h4> Sword </h4>
                    {player.sword > 0 ? (
                        allSwords.map((sword) => {
                        if (sword.id === player.sword) {
                            return (
                            <div className="shop-item" key={sword.id}>
                                <div className="item-content">
                                <img src={sword.img} alt={sword.name} />
                                <div className="item-info">
                                    <p>{sword.name}</p>
                                    <p>Damage: {sword.stats}</p>
                                </div>
                                </div>
                            </div>
                            );
                        }
                        return null; // Return null for elements that don't match
                        })
                    ) : (
                        <div className="shop-item">
                        <h2>No sword equipped</h2>
                        </div>
                    )}
                    </div>

                    <div id="eqarmor">
                    <h4> Armor </h4>
                    {player.armor > 0 ? (
                        allArmors.map((armor) => {
                        if (armor.id === player.armor) {
                            return (
                            <div className="shop-item" key={armor.id}>
                                <div className="item-content">
                                <img src={armor.img} alt={armor.name} />
                                <div className="item-info">
                                    <p>{armor.name}</p>
                                    <p>Armor: {armor.stats}</p>
                                </div>
                                </div>
                            </div>
                            );
                        }
                        return null; // Return null for elements that don't match
                        })
                    ) : (
                        <div className="shop-item">
                        <h2>No armor equipped</h2>
                        </div>
                    )}
                    </div>

                    <div id="eqboots">
                    <h4> Boots </h4>
                    {player.boots > 0 ? (
                        allBoots.map((boots) => {
                        if (boots.id === player.boots) {
                            return (
                            <div className="shop-item" key={boots.id}>
                                <div className="item-content">
                                <img src={boots.img} alt={boots.name} />
                                <div className="item-info">
                                    <p>{boots.name}</p>
                                    <p>Speed: {boots.stats}</p>
                                </div>
                                </div>
                            </div>
                            );
                        }
                        return null; // Return null for elements that don't match
                        })
                    ) : (
                        <div className="shop-item">
                        <h2>No boots equipped</h2>
                        </div>
                    )}
                    </div>
                </div>
        </div>

    )

}
export default PlayerUpgrades;