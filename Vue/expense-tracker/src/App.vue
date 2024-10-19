<template>
  <Header></Header>
  <div class="container">

    <Balance :total="total"></Balance>
    <IncomeExpenses :income="+income" :expenses="+expenses"></IncomeExpenses>
    <TransactionList :transactions="transactions" @transactionDeleted="handleTransactionDeleted"></TransactionList>
    <AddTransaction @transactionSubmitted="handleTransactionSubmitted"></AddTransaction>
  </div>
</template>
<script setup>
import Header from '../src/components/Header.vue'
import Balance from '../src/components/Balance.vue'
import IncomeExpenses from './components/IncomeExpenses.vue';
import TransactionList from './components/TransactionList.vue';
import AddTransaction from './components/AddTransaction.vue';
import { computed, ref, onMounted } from 'vue';
import { useToast } from 'vue-toastification';

const toast=useToast();
const transactions = ref([

])
onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions'));
  if (savedTransactions) {
    transactions.value = savedTransactions;
  }
})



const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
})

const income = computed(() => {
  return transactions.value.filter((transaction) => {
    return transaction.amount >= 0;
  }).reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
})

const expenses = computed(() => {
  return transactions.value.filter((transaction) => {
    return transaction.amount < 0;
  }).reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
})

const handleTransactionSubmitted = (transactionData) => {

  transactions.value.push({
    id: generateUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount

  })
  toast.success('Transaction added.');
  
  savedTransactionstoLocalSotrage();
}

const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000);
}

//delete

const handleTransactionDeleted = (id) => {
  transactions.value = transactions.value.filter((transaction) => {
    return transaction.id !== id;
  })
  toast.success('Transaction deleted.');
  savedTransactionstoLocalSotrage()
}

//save to localstorage
const savedTransactionstoLocalSotrage=()=>{
  localStorage.setItem('transactions',JSON.stringify(transactions.value))
}

</script>
<style lang="">

</style>