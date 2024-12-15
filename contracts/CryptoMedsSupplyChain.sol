// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CryptoMedsSupplyChain {
    struct Medication {
        uint id;
        string name;
        string manufacturer;
        string distributor;
        string pharmacy;
        string patient;
        uint256 timestamp;
        string status;
    }

    mapping(uint => Medication) public medications;
    uint public medicationCount;

    event MedicationUpdated(
        uint id,
        string name,
        string manufacturer,
        string distributor,
        string pharmacy,
        string patient,
        uint256 timestamp,
        string status
    );

    function addMedication(
        string memory _name,
        string memory _manufacturer,
        string memory _distributor,
        string memory _pharmacy,
        string memory _patient,
        string memory _status
    ) public {
        medicationCount++;
        medications[medicationCount] = Medication(
            medicationCount,
            _name,
            _manufacturer,
            _distributor,
            _pharmacy,
            _patient,
            block.timestamp,
            _status
        );

        emit MedicationUpdated(
            medicationCount,
            _name,
            _manufacturer,
            _distributor,
            _pharmacy,
            _patient,
            block.timestamp,
            _status
        );
    }

    function getMedication(uint _id) public view returns (Medication memory) {
        return medications[_id];
    }
}
