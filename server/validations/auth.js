import { body } from "express-validator"

export const registerValidation = [
    body('email', 'duzgun email gormati deyil ').isEmail(),
    body('password', 'parol en az 5 simvol olmalidir').isLength({ min: 5 }),
    body('fullName', 'adiniz 3 simvoldan azolmamalidir').isLength({ min: 3 }),
    body('avatarUrl', 'duzgun url deyil').optional().isURL(),
]
export const loginValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 }),
];