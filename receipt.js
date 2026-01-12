        document.getElementById('barcodeText').addEventListener('input', function() {
            var text = this.value;
            var url = 'https://barcode.tec-it.com/barcode.ashx?data=' + encodeURIComponent(text) + '&code=Code128&dpi=96';
            document.getElementById('barcodeImg').src = url;
        });

        document.getElementById('modelType').addEventListener('input', function() {
            document.getElementById('modelValue').innerText = this.value;
        });

        document.getElementById('size').addEventListener('input', function() {
            document.getElementById('sizeValue').innerText = this.value;
        });

        document.getElementById('printBtn').addEventListener('click', function() {
            window.print();
        });

        document.getElementById('clearBtn').addEventListener('click', function() {
            document.getElementById('modelType').value = '';
            document.getElementById('size').value = '';
            document.getElementById('barcodeText').value = '';
            document.getElementById('modelValue').innerText = '';
            document.getElementById('sizeValue').innerText = '';
        });