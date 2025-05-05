const Payment = require("../models/paymentModel");

const getAllPayments = async () => {
  try {
    return await Payment.find();
  } catch (error) {
    console.error("Error getting payments:", error);
    throw new Error("Error al obtener los pagos");
  }
};

const getPaymentById = async (id) => {
  try {
    const payment = await Payment.findById(id);
    if (!payment) {
      throw new Error("Pago no encontrado");
    }
    return payment;
  } catch (error) {
    console.error("Error getting payment by ID:", error);
    throw new Error("Error al obtener el pago");
  }
};

const createPayment = async (paymentData) => {
  try {
    const payment = new Payment(paymentData);
    const savedPayment = await payment.save();
    return savedPayment;
  } catch (error) {
    console.error("Error creating payment:", error);
    throw new Error("Error al crear el pago");
  }
};

const updatePayment = async (id, paymentData) => {
  try {
    const updatedPayment = await Payment.findByIdAndUpdate(id, paymentData, {
      new: true,
    });
    return updatedPayment;
  } catch (error) {
    console.error("Error updating payment:", error);
    throw new Error("Error al actualizar el pago");
  }
};

const deletePayment = async (id) => {
  try {
    return await Payment.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Error al eliminar el pago');
  }
};

module.exports = {
  getAllPayments,
  getPaymentById,
  createPayment,
  updatePayment,
  deletePayment,
};