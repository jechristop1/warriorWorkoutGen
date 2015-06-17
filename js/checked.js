if(barbell.checked){
            totalUpperMain += totalUpperMain.concat(barbellUpperDB);
            totalLowerMain += totalLowerMain.concat(barbellLowerDB);
        }
        if(dumbell.checked){
            totalUpperAccessory += totalUpperAccessory.concat(dumbellUpperDB);
            totalLowerAccessory += totalLowerAccessory.concat(dumbellLowerDB);    
        }
        if(kettlebell.checked){
            totalUpperAccessory += totalUpperAccessory.concat(kettlebellUpperDB);
            totalLowerAccessory += totalLowerAccessory.concat(kettlebellLowerDB);    
        }
        if(trx.checked){
            totalUpperAccessory += totalUpperAccessory.concat(trxUpperDB);
            totalLowerAccessory += totalLowerAccessory.concat(trxLowerDB);    
        }
        if(bike.checked){
            totalCardioEx += totalCardioEx.push('Bike');
        }
        if(treadmill.checked){
            totalCardioEx += totalCardioEx.push('Treadmill');
        }
        if(elliptical.checked){
            totalCardioEx += totalCardioEx.push('Elliptical');
        }
        if(sled.checked){
            totalCardioEx += totalCardioEx.push('Sled');
        }
        if(rower.checked){
            totalCardioEx += totalCardioEx.push('Rower');
        }

