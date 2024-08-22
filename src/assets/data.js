const initialSeats = [
  { id: 1, number: "A1", isBooked: false, isFemaleOnly: false },
  { id: 2, number: "A2", isBooked: false, isFemaleOnly: false },
  { id: 3, number: "A3", isBooked: false, isFemaleOnly: false },
  { id: 4, number: "A4", isBooked: false, isFemaleOnly: false },
  { id: 5, number: "B1", isBooked: false, isFemaleOnly: false },
  { id: 6, number: "B2", isBooked: false, isFemaleOnly: false },
  { id: 7, number: "B3", isBooked: false, isFemaleOnly: false },
  { id: 8, number: "B4", isBooked: false, isFemaleOnly: false },
  { id: 9, number: "C1", isBooked: false, isFemaleOnly: false },
  { id: 10, number: "C2", isBooked: false, isFemaleOnly: false },
  { id: 11, number: "C3", isBooked: false, isFemaleOnly: false },
  { id: 12, number: "C4", isBooked: false, isFemaleOnly: false },
  { id: 13, number: "D1", isBooked: false, isFemaleOnly: false },
  { id: 14, number: "D2", isBooked: true, isFemaleOnly: false }, // Unavailable seat
  { id: 15, number: "D3", isBooked: false, isFemaleOnly: false },
  { id: 16, number: "D4", isBooked: false, isFemaleOnly: false },
  { id: 17, number: "E1", isBooked: false, isFemaleOnly: false },
  { id: 18, number: "E2", isBooked: false, isFemaleOnly: false },
  { id: 19, number: "E3", isBooked: false, isFemaleOnly: false },
  { id: 20, number: "E4", isBooked: false, isFemaleOnly: false },
  { id: 21, number: "F1", isBooked: false, isFemaleOnly: false },
  { id: 22, number: "F2", isBooked: false, isFemaleOnly: false },
  { id: 23, number: "F3", isBooked: false, isFemaleOnly: false },
  { id: 24, number: "F4", isBooked: false, isFemaleOnly: false },
  { id: 25, number: "G1", isBooked: false, isFemaleOnly: false },
  { id: 26, number: "G2", isBooked: false, isFemaleOnly: false },
  { id: 27, number: "G3", isBooked: false, isFemaleOnly: false },
  { id: 28, number: "G4", isBooked: false, isFemaleOnly: false },
  { id: 29, number: "H1", isBooked: false, isFemaleOnly: false },
  { id: 30, number: "H2", isBooked: false, isFemaleOnly: false },
  { id: 31, number: "H3", isBooked: false, isFemaleOnly: false },
  { id: 32, number: "H4", isBooked: false, isFemaleOnly: true }, // Female-only seat
  { id: 33, number: "I1", isBooked: false, isFemaleOnly: true }, // Female-only seat
  { id: 34, number: "I2", isBooked: false, isFemaleOnly: true }, // Female-only seat
  { id: 35, number: "I3", isBooked: true, isFemaleOnly: true }, // Booked Female-only seat
  { id: 36, number: "I4", isBooked: false, isFemaleOnly: true }, // Female-only seat
  { id: 37, number: "J1", isBooked: false, isFemaleOnly: true }, // Female-only seat
  { id: 38, number: "J2", isBooked: true, isFemaleOnly: true }, // Booked Female-only seat
  { id: 39, number: "J3", isBooked: false, isFemaleOnly: true }, // Female-only seat
  { id: 40, number: "J4", isBooked: false, isFemaleOnly: true }, // Female-only seat
  { id: 41, number: "K1", isBooked: false, isFemaleOnly: true }, // Female-only seat
  { id: 42, number: "K2", isBooked: false, isFemaleOnly: true }, // Female-only seat
  { id: 43, number: "K3", isBooked: false, isFemaleOnly: true }, // Female-only seat
  { id: 44, number: "K4", isBooked: false, isFemaleOnly: true }, // Female-only seat
  { id: 45, number: "L1", isBooked: false, isFemaleOnly: true }, // Female-only seat
  { id: 46, number: "L2", isBooked: true, isFemaleOnly: true }, // Booked Female-only seat
  { id: 47, number: "L3", isBooked: false, isFemaleOnly: true }, // Female-only seat
  { id: 48, number: "L4", isBooked: false, isFemaleOnly: true }, // Female-only seat
  { id: 49, number: "M1", isBooked: false, isFemaleOnly: false },
  { id: 50, number: "M2", isBooked: false, isFemaleOnly: false },
  { id: 51, number: "M3", isBooked: false, isFemaleOnly: false },
  { id: 52, number: "M4", isBooked: false, isFemaleOnly: false },
  { id: 53, number: "N1", isBooked: false, isFemaleOnly: false },
  { id: 54, number: "N2", isBooked: false, isFemaleOnly: false },
  { id: 55, number: "N3", isBooked: false, isFemaleOnly: false },
  { id: 56, number: "N4", isBooked: false, isFemaleOnly: false },
  { id: 57, number: "O1", isBooked: false, isFemaleOnly: false },
  { id: 58, number: "O2", isBooked: false, isFemaleOnly: false },
  { id: 59, number: "O3", isBooked: false, isFemaleOnly: false },
  { id: 60, number: "O4", isBooked: false, isFemaleOnly: false },
  { id: 61, number: "P1", isBooked: false, isFemaleOnly: false },
  { id: 62, number: "P2", isBooked: false, isFemaleOnly: false },
  { id: 63, number: "P3", isBooked: false, isFemaleOnly: false },
  { id: 64, number: "P4", isBooked: false, isFemaleOnly: false },
  { id: 65, number: "Q1", isBooked: false, isFemaleOnly: false },
  { id: 66, number: "Q2", isBooked: false, isFemaleOnly: false },
  { id: 67, number: "Q3", isBooked: false, isFemaleOnly: false },
  { id: 68, number: "Q4", isBooked: false, isFemaleOnly: false },
  { id: 69, number: "R1", isBooked: false, isFemaleOnly: false },
  { id: 70, number: "R2", isBooked: false, isFemaleOnly: false },
  { id: 71, number: "R3", isBooked: false, isFemaleOnly: false },
  { id: 72, number: "R4", isBooked: false, isFemaleOnly: false },
  { id: 73, number: "S1", isBooked: false, isFemaleOnly: false },
  { id: 74, number: "S2", isBooked: false, isFemaleOnly: true }, // Female-only seat
  { id: 75, number: "S3", isBooked: true, isFemaleOnly: true }, // Booked Female-only seat
  { id: 76, number: "S4", isBooked: false, isFemaleOnly: true }, // Female-only seat
  { id: 77, number: "T1", isBooked: false, isFemaleOnly: true }, // Female-only seat
  { id: 78, number: "T2", isBooked: false, isFemaleOnly: true }, // Female-only seat
  { id: 79, number: "T3", isBooked: false, isFemaleOnly: true }, // Female-only seat
  { id: 80, number: "T4", isBooked: false, isFemaleOnly: true }, // Female-only seat
  { id: 81, number: "U1", isBooked: false, isFemaleOnly: false },
  { id: 82, number: "U2", isBooked: false, isFemaleOnly: false },
  { id: 83, number: "U3", isBooked: false, isFemaleOnly: false },
  { id: 84, number: "U4", isBooked: false, isFemaleOnly: false },
  { id: 85, number: "V1", isBooked: false, isFemaleOnly: false },
  { id: 86, number: "V2", isBooked: false, isFemaleOnly: false },
  { id: 87, number: "V3", isBooked: false, isFemaleOnly: false },
];

export default initialSeats;
