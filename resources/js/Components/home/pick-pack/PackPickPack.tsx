import React, { useState } from 'react';
import {Label} from "@/Components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
const PackPickPack = () => {
    const [selectedPackaging, setSelectedPackaging] = useState('Busta');

    const packagingOptions = {
        Busta: { width: 30, height: 40, depth: 2, weight: 0.1 },
        'Scatola XS': { width: 15, height: 15, depth: 10, weight: 0.2 },
        'Scatola M': { width: 30, height: 30, depth: 20, weight: 0.5 },
        'Scatola L': { width: 40, height: 45, depth: 24, weight: 0.5 },
        'Scatola XL': { width: 38, height: 45, depth: 24, weight: 0.5 },
        Cofanetto: { width: 20, height: 20, depth: 15, weight: 0.3 },
    };

    const handlePackagingChange = (value) => {
        setSelectedPackaging(value);
    };

    const { width, height, depth, weight } = packagingOptions[selectedPackaging];

    const volumeWeight = (width * height * depth) / 5000;

    return (
        <div className="w-full p-1">
            {/*p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto */}
            <Label className="font-display text-sm font-medium">Seleziona l'imballaggio</Label>
            <Select onValueChange={handlePackagingChange} value={selectedPackaging} defaultValue={"Busta"}>
                <SelectTrigger className="w-full py-0 h-9">
                    <SelectValue placeholder="Imballaggi"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Imballaggi</SelectLabel>
                        {Object.keys(packagingOptions).map((packaging) => (

                            <SelectItem key={packaging} value={packaging}>{packaging}</SelectItem>

                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>

                <div className="mt-2">
                    <p className="text-sm text-gray-600 flex justify-between"><span>Dimensioni (cm)</span> <span className="font-medium">{width}x{height}x{depth}</span></p>
                    <p className="text-sm text-gray-600 flex justify-between"><span>Peso (kg)</span> <span className="font-medium">{width}</span></p>
                    <p className="text-sm text-gray-600 flex justify-between"><span>Peso volumetrico </span> <span className="font-medium">{volumeWeight.toFixed(2)}</span></p>

                </div>

        </div>
    );
};

export default PackPickPack;
