$(document).ready(function () {
    // Function to handle the increment button click
    $('button[id^="increment"]').click(function () {
      // Find the input field associated with the button
      var inputField = $(this).closest('div').find('input[type="text"]');
      // Find the total price cell associated with the button's row
      var totalPriceCell = $(this).closest('tr').find('th[id^="totalPrice"]');
      // Find the amount cell associated with the button's row
      var amountCell = $(this).closest('tr').find('th[id^="amount"]');
      
      // Get the current quantity value
      var quantity = parseInt(inputField.val());

      // Increment the quantity
      quantity++;

      // Update the input field with the new quantity
      inputField.val(quantity);

      // Get the price per unit
      var pricePerUnit = parseInt($(this).closest('tr').find('th:eq(4)').text().replace('Rs ', ''));

      // Calculate the new total price
      var newTotalPrice = quantity * pricePerUnit;

      // Update the total price cell with the new value
      totalPriceCell.text('Rs ' + newTotalPrice);

      // Calculate the new amount
      var newAmount = newTotalPrice;

      // Update the amount cell with the new value
      amountCell.text('Rs ' + newAmount);

      // Update the total price
      updateTotalPrice();
    });

    // Function to handle the decrement button click
    $('button[id^="decrement"]').click(function () {
      // Find the input field associated with the button
      var inputField = $(this).closest('div').find('input[type="text"]');
      // Find the total price cell associated with the button's row
      var totalPriceCell = $(this).closest('tr').find('th[id^="totalPrice"]');
      // Find the amount cell associated with the button's row
      var amountCell = $(this).closest('tr').find('th[id^="amount"]');
      
      // Get the current quantity value
      var quantity = parseInt(inputField.val());

      // Ensure the quantity is not less than 1
      if (quantity > 1) {
        // Decrement the quantity
        quantity--;

        // Update the input field with the new quantity
        inputField.val(quantity);

        // Get the price per unit
        var pricePerUnit = parseInt($(this).closest('tr').find('th:eq(4)').text().replace('Rs ', ''));

        // Calculate the new total price
        var newTotalPrice = quantity * pricePerUnit;

        // Update the total price cell with the new value
        totalPriceCell.text('Rs ' + newTotalPrice);

        // Calculate the new amount
        var newAmount = newTotalPrice;

        // Update the amount cell with the new value
        amountCell.text('Rs ' + newAmount);

        // Update the total price
        updateTotalPrice();
      }
    });

    // Function to update the total price
    function updateTotalPrice() {
      var total = 0;
      $('th[id^="totalPrice"]').each(function () {
        var price = parseInt($(this).text().replace('Rs ', ''));
        total += price;
      });

      // Update the total price input field
      $('#sum').val('Rs ' + total);
    }

    // Initial calculation of total price
    updateTotalPrice();
  });