import type transaction from '@/types/transaction'
import { computed } from 'vue'

export const transactions: Array<transaction> = [
    { name: 'Suscripciones', price: -20 },
    { name: 'Arriendo', price: -470 },
    { name: 'Pago', price: 2000 },
    { name: 'Ventas', price: 50 }
]

export const total = computed(() => {
    return transactions.reduce((acc, transaction) => {
        return acc + transaction.price;
    }, 0)
})

export const totalIncomes = computed(() => {
    return transactions.filter(am => am.price > 0).reduce((acc, transaction) => {
        return acc + transaction.price
    }, 0)
})

export const totalExpenses = computed(() => {
    return transactions.filter(am => am.price < 0).reduce((acc, transaction) => {
        console.log(acc);
        return acc + transaction.price
    }, 0)
})