/**
 * Testes para funções utilitárias do frontend
 */
/* eslint-disable @typescript-eslint/no-explicit-any */

// Utilitários para formatação
export const formatCPF = (cpf: string): string => {
  return cpf
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2')
    .substring(0, 14);
};

export const formatCNPJ = (cnpj: string): string => {
  return cnpj
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .substring(0, 18);
};

export const formatPhone = (phone: string): string => {
  return phone
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{4})(\d)/, '$1-$2')
    .replace(/(-\d{4})(\d)/, '$1-$2')
    .substring(0, 15);
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

describe('Frontend Utilities', () => {
  describe('formatCPF', () => {
    it('deve formatar CPF corretamente', () => {
      expect(formatCPF('11144477735')).toBe('111.444.777-35');
    });

    it('deve remover caracteres não numéricos', () => {
      expect(formatCPF('111.444.777-35')).toBe('111.444.777-35');
    });
  });

  describe('formatCNPJ', () => {
    it('deve formatar CNPJ corretamente', () => {
      expect(formatCNPJ('11222333000181')).toBe('11.222.333/0001-81');
    });

    it('deve remover caracteres não numéricos', () => {
      expect(formatCNPJ('11.222.333/0001-81')).toBe('11.222.333/0001-81');
    });
  });

  describe('formatPhone', () => {
    it('deve formatar telefone corretamente', () => {
      expect(formatPhone('1199999999')).toBe('(11) 9999-9999');
    });

    it('deve lidar com telefones de 9 dígitos', () => {
      expect(formatPhone('85988888888')).toBe('(85) 98888-8888');
    });
  });

  describe('formatCurrency', () => {
    it('deve formatar valor monetário em reais', () => {
      expect(formatCurrency(1000)).toBe('R$ 1.000,00');
      expect(formatCurrency(1500.50)).toBe('R$ 1.500,50');
    });
  });
});
