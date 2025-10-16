const express = require('express');
const router = express.Router();

// Lấy tất cả dreams
router.get('/api/dreams', (req, res) => {
});

// Lấy 1 dream
router.get('/api/dreams/:id', (req, res) => {
});

// Tạo dream mới
router.post('/api/dreams', (req, res) => {
});

// Cập nhật dream
router.put('/api/dreams/:id', (req, res) => {
});

// Xóa dream
router.delete('/api/dreams/:id', (req, res) => {
});

module.exports = router;