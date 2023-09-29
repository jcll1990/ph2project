import React, { useState, useEffect } from "react";

function GameUpgrades({
    player,
    setPlayer,
    storeItems,
    setStoreItems
}) {

//SETTING THE SOLD-BUY STATE

    const [swords, setSwords] = useState(storeItems.swords) 
    const [boots, setBoots] = useState(storeItems.boots) 
    const [armors, setArmors] = useState(storeItems.armors) 
    
          const availableSwords = swords.map((sword) => {
            let owned = false;
            if (sword.id <= player.sword) {
                owned = true;
            }     
            return {
                ...sword,
                owned
            };
        });
        const availableArmors = armors.map((armor) => {
            let owned = false;
            if (armor.id <= player.armor) {
                owned = true;
            }     
            return {
                ...armor,
                owned
            };
        });
        const availableBoots = boots.map((boot) => {
            let owned = false;
            if (boot.id <= player.boots) {
                owned = true;
            }     
            return {
                ...boot,
                owned
            };
        });


//SETTING THE ITEM TO DISPLAY IN THE STORE

    const [shownSword, setShownSword] = useState(1) 
    const [shownBoots, setShownBoots] = useState(1) 
    const [shownArmor, setShownArmor] = useState(1)

    function handlePrevSword () {
        if (shownSword <= 1) { }
        else{
            setShownSword((prev) => prev - 1);
        }
    }
    function handleNextSword () {
        if (shownSword >= 4) { }
        else{
            setShownSword((prev) => prev + 1);
        }
    }
    function handlePrevArmor () {
        if (shownArmor <= 1) { }
        else{
            setShownArmor((prev) => prev - 1);
        }
    }
    function handleNextArmor () {
        if (shownArmor >= 4) { }
        else{
            setShownArmor((prev) => prev + 1);
        }
    }
    function handlePrevBoots () {
        if (shownBoots <= 1) { }
        else{
            setShownBoots((prev) => prev - 1);
        }
    }
    function handleNextBoots () {
        if (shownBoots >= 4) { }
        else{
            setShownBoots((prev) => prev + 1);
        }
    }



//BUYING AN ITEM


    function handleBuySword (a,b,c) {

        if( player.money >= c ) {

            let userupdate = {
                sword : a,
                dmg : b,
                money : (player.money - c)
                }

            fetch(`http://localhost:3000/users/${player.id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(userupdate)
            })
            .then(response => {

                fetch(`http://localhost:3000/users/${player.id}`)
                .then((resp) => resp.json())
                .then((data) => {
                    setPlayer(data);
                    alert("You got it")
                });

            })
        }
        else {
            alert('Go kill some demons, you are broke')
        }
    }

    function handleBuyArmor (a,b,c) {

        if( player.money >= c ) {

            let userupdate = {
                armor : a,
                hp : b,
                money : (player.money - c)
                }

            fetch(`http://localhost:3000/users/${player.id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(userupdate)
            })
            .then(response => {

                fetch(`http://localhost:3000/users/${player.id}`)
                .then((resp) => resp.json())
                .then((data) => {
                    setPlayer(data);
                    alert("You got it")
                });

            })
        }
        else {
            alert('Go kill some demons, you are broke')
        }
    }

    function handleBuyBoots (a,b,c) {

        if( player.money >= c ) {

            let userupdate = {
                boots : a,
                speed : b,
                money : (player.money - c)
                }

            fetch(`http://localhost:3000/users/${player.id}`, {
            method: 'PATCH',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(userupdate)
            })
            .then(response => {

                fetch(`http://localhost:3000/users/${player.id}`)
                .then((resp) => resp.json())
                .then((data) => {
                    setPlayer(data);
                    alert("You got it")
                });

            })

        }
        else {
            alert('Go kill some demons, you are broke')
        }
    }


    function test() {
        console.log(player.sword)
        console.log(player.armor)
        console.log(player.boots)

    }

 
    return (

<div id="store">

        <div id="storeText">
            <h2>Store:</h2>
        </div>

        <div id="storeItems">
            <div id="eqsword">
            <h4>Upgrade your sword</h4>
            {availableSwords.map((sword) => {
                if (sword.id === shownSword) {
                return (
                <div className="shop-item">

                    <div className="item-content" key={sword.id}>
                        <img src={sword.img} alt={sword.name} />
                        <div className="item-info">
                            <p>{sword.name}</p>
                            <p>Stats: {sword.stats}</p>
                            <p>Price: {sword.price}</p>
                        </div>
                    </div>

                    <div className="shop-buttons">
                        <button onClick={handlePrevSword}>Previous Sword</button>
                        <br />
                        {sword.owned?
                        <button >SOLD</button>
                        :
                        <button onClick={() => handleBuySword(sword.id,sword.stats,sword.price)}>BUY</button>
                        }
                         <br />
                        <button onClick={handleNextSword}>Next Sword</button>
                    </div>
                </div>
                )
            }})}
            </div>

            <div id="eqarmor">
            <h4>Upgrade your armor</h4>
            {availableArmors.map((armor) => {
                if (armor.id === shownArmor) {
                return (
                <div className="shop-item">

                    <div className="item-content" key={armor.id}>
                        <img src={armor.img} alt={armor.name} />
                        <div className="item-info">
                            <p>{armor.name}</p>
                            <p>Stats: {armor.stats}</p>
                            <p>Price: {armor.price}</p>
                        </div>
                    </div>

                    <div className="shop-buttons">
                        <button onClick={handlePrevArmor}>Previous armor</button>
                        <br />
                        {armor.owned?
                        <button >SOLD</button>
                        :
                        <button onClick={() => handleBuyArmor(armor.id,armor.stats,armor.price)}>BUY</button>
                        }
                          <br />
                        <button onClick={handleNextArmor}>Next armor</button>
                    </div>
                </div>
                )
            }})}
            </div>

            <div id="eqboots">
            <h4>Upgrade your boots</h4>
            {availableBoots.map((boots) => {
                if (boots.id === shownBoots) {
                return (
                <div className="shop-item">

                    <div className="item-content" key={boots.id}>
                        <img src={boots.img} alt={boots.name} />
                        <div className="item-info">
                            <p>{boots.name}</p>
                            <p>Stats: {boots.stats}</p>
                            <p>Price: {boots.price}</p>
                        </div>
                    </div>

                    <div className="shop-buttons">
                        <button onClick={handlePrevBoots}>Previous boots</button>
                        <br />
                        {boots.owned?
                        <button >SOLD</button>
                        :
                        <button onClick={() => handleBuyBoots(boots.id,boots.stats,boots.price)}>BUY</button>
                        }
                          <br />
                        <button onClick={handleNextBoots}>Next boots</button>
                    </div>
                </div>
                )
            }})}
            </div>
        </div>

</div>
        
    )

}
export default GameUpgrades;